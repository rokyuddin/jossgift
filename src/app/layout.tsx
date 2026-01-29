import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/components/organisms/providers";

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });


export const metadata: Metadata = {
  title: {
    template: '%s | Jossgift',
    default: 'Jossgift',
  },
  description: "Jossgift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body
        suppressHydrationWarning
        className={`${roboto.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
