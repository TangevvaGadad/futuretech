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
  title: "FutureTech - Empowering Communities Through World-Class Technology",
  description: "FutureTech empowers communities worldwide with world-class technology, creates equal opportunities through education, and builds sustainable solutions that shape a brighter tomorrow.",
  keywords: ["technology", "innovation", "software development", "AI", "cloud solutions", "digital transformation"],
  authors: [{ name: "FutureTech" }],
  creator: "FutureTech",
  publisher: "FutureTech",
  robots: "index, follow",
      openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://futuretech.com",
      title: "FutureTech - Empowering Communities Through World-Class Technology",
      description: "Empowering communities worldwide with world-class technology and innovative solutions.",
      siteName: "FutureTech",
    },
  twitter: {
    card: "summary_large_image",
    title: "FutureTech - Empowering Communities Through World-Class Technology",
    description: "Empowering communities worldwide with world-class technology and innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
