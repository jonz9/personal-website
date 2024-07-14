import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Zhang",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <PageTransition>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
