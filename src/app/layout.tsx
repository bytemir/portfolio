import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emir Alam | Portfolio",
  description:
    "Physics student and low-level systems developer. Developing Custom ISAs, emulators, compilers, and quantum mechanics visualizers.",
  keywords: [
    "physics",
    "systems programming",
    "compiler",
    "emulator",
    "quantum mechanics",
  ],
  authors: [{ name: "Emir Alam" }],
  openGraph: {
    title: "Emir Alam | Portfolio",
    description:
      "Physics student and low-level systems developer. Developing Custom ISAs, emulators, compilers, and quantum mechanics visualizers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
