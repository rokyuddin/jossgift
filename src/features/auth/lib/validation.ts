import { z } from "zod";

// Phone verification schemas
export const sendOTPSchema = z.object({
  phone_number: z
    .string()
    .min(11, "Phone number must be at least 11 digits")
    .max(11, "Phone number must be exactly 11 digits")
    .regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),
});

export const verifyOTPSchema = z.object({
  phone_number: z.string(),
  code: z.string().length(4, "Verification code must be 4 digits"),
});

// Sign In schema
export const signInSchema = z.object({
  phone_number: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .regex(/^01[3-9]\d{8}$/, "Invalid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Profile Setup / Sign Up details schema
export const signUpSchema = z.object({
  phone_number: z.string(),
  first_name: z.string().min(2, "First name is too short"),
  last_name: z.string().min(2, "Last name is too short"),
  email: z.email("Invalid email address").optional().or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirm: z.string(),
  terms_accepted: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.password_confirm, {
  message: "Passwords do not match",
  path: ["password_confirm"],
});

// Forgot Password schemas
export const forgotPasswordSchema = sendOTPSchema;

export const resetPasswordSchema = z.object({
  phone_number: z.string(),
  code: z.string().length(4, "Verification code must be 4 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirm: z.string(),
}).refine((data) => data.password === data.password_confirm, {
  message: "Passwords do not match",
  path: ["password_confirm"],
});

export type SendOTPFormData = z.infer<typeof sendOTPSchema>;
export type VerifyOTPFormData = z.infer<typeof verifyOTPSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
