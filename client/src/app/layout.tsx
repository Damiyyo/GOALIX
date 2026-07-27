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

export const metadata = {
  title: {
    default: "Goalix",
    template: "%s | Goalix",
  },
  description:
    "Goalix - AI Football predictions, insights and football analytics.",

    keywords: [
      "Goalix",
      "Football",
      "Predictions",
      "Live Scores",
      "Goalix TV",
    ],
  
    authors: [
      {
        name: "Goalix",
      },
    ],

    openGraph: {
      title: "Goalix",
      description:
        "AI Football predictions and Goalix TV.",
      siteName: "Goalix",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
