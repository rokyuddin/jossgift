import NextAuth, { CredentialsSignin, type DefaultSession } from "next-auth"
import { type JWT } from "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import type { NextAuthConfig } from "next-auth"
import { isTokenExpired } from "@/features/auth/lib/utils"

declare module "next-auth" {
  interface User {
    phone_number?: string
    accessToken?: string
    refreshToken?: string
  }

  interface Session {
    user: {
      id: string
      phone_number: string
      accessToken: string
      refreshToken: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    phone_number: string
    accessToken: string
    refreshToken: string
  }
}

async function refreshAccessToken(token: any) {
  try {
    if (!token.refreshToken) {
      throw new Error("No refresh token")
    }

    console.log("Refreshing access token")
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/token/refresh/`,
      {
        refresh: token.refreshToken,
      }
    )
    console.log("Refreshed access token", response.data)

    const refreshedTokens = response.data

    return {
      ...token,
      accessToken: refreshedTokens.access,
      refreshToken: refreshedTokens.refresh ?? token.refreshToken, // Fallback to old refresh token
      error: undefined,
    }
  } catch (error) {
    console.error("Error refreshing access token, signing out user", error)
    return null
  }
}

export const config = {
  providers: [
    Credentials({
      credentials: {
        phone_number: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" },
        is_signup: { label: "Is Signup", type: "boolean" },
      },
      authorize: async (credentials) => {
        try {

          if (!credentials?.phone_number || !credentials?.password) {
            return null
          }

          
          console.log("Authenticating against Django API:", process.env.NEXT_PUBLIC_API_URL);
          const url = `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/${credentials?.is_signup ? "register" : "login"}/`

          const response = await axios.post(
            url,
           credentials?.is_signup ? credentials: {
              phone_number: credentials.phone_number,
              password: credentials.password,
            }
          );

          const apiData = response.data.data;
          const user = apiData?.user;
          const tokens = apiData?.tokens;

          if (user) {
            // Map Django user to NextAuth user object
            return {
              id: String(user.id || user.pk), // Ensure ID is a string
              name: user.full_name || `${user.first_name} ${user.last_name}`,
              email: user.email,
              phone_number: user.phone_number,
              accessToken: tokens?.access,
              refreshToken: tokens?.refresh,
            }
          }
          return null
        } catch (error: any) {
          const backendMessage = error.response?.data?.message || error.response?.data?.detail || error.message || "Authentication failed";
          console.error("Django Auth Error:", backendMessage);

          class SignInError extends CredentialsSignin {
            code = backendMessage
          }

          throw new SignInError()
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in", // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          id: user.id,
          phone_number: (user as any).phone_number,
          accessToken: (user as any).accessToken,
          refreshToken: (user as any).refreshToken,
        }
      }

      console.log(isTokenExpired(token.accessToken as string))

      // Return previous token if the access token has not expired yet
      if (token.accessToken && !isTokenExpired(token.accessToken as string)) {
        return token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
    async session({ session, token }) {
      if (!token) {
        return null as any
      }

      if (session.user) {
        session.user.id = token.id as string
        session.user.phone_number = token.phone_number as string
        session.user.accessToken = token.accessToken as string
        session.user.refreshToken = token.refreshToken as string
      }
      return session
    }
  },
  // Ensure we trust host for NextAuth v5
  trustHost: true,
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)