import type { Metadata, Viewport } from "next";
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
  title: "Ayush | AI Systems Engineer & Quantum Computing Explorer",
  description: "Digital headquarters and research laboratory of Ayush, a product architect and systems researcher building advanced AI systems, quantum interfaces, and real-world full-stack systems.",
  keywords: ["Ayush", "AI Systems Engineer", "Quantum Computing Researcher", "Machine Learning Trading", "Full Stack Developer", "Next.js", "TypeScript"],
  authors: [{ name: "Ayush" }],
  creator: "Ayush",
  openGraph: {
    title: "Ayush | AI Systems Engineer & Quantum Computing Explorer",
    description: "Digital headquarters and research laboratory of Ayush, building next-generation AI infrastructure and quantum learning systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush | AI Systems Engineer",
    description: "Digital headquarters of Ayush. Building advanced AI systems, quantum interfaces, and deep systems engineering.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-dark-bg text-gray-200 antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan`}
      >
        {children}
      </body>
    </html>
  );
}
