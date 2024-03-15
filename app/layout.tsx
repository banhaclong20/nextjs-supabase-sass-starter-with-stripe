import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/query-provider";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/Spotlight/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SASS Boilerplate with Next Js + Supabase + React Query + Stripe",
  description: "A full starter for any SASS that using Next JS and Stripe"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-6xl min-h-screen mx-auto py-10 px-5 xl:px-0">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
