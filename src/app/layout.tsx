import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import ToastProvider from "@/components/toast-provider";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "MarketWave",
  description:
    "MarketWave is a modern web application built with Next.js, designed to offer a seamless and responsive user experience for browsing products, services, and promotions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
