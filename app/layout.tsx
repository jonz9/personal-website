import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "John Zhang",
  description:
    "John Zhang — Computer Engineering at the University of Waterloo, machine learning engineer at Mecka AI. Computer vision, multimodal models, robotics.",
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${prefix}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${prefix}/favicon/favicon-16x16.png`} />
      </head>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable} bg-bg font-sans text-fg antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
