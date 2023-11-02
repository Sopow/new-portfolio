import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const img = "https://i.imgur.com/3gduCMH.png"

export const metadata: Metadata = {
  metadataBase: new URL("https://new.sopow.fr"),
  title: "Sopow",
  description: "Web Developer / Designer / Student based in France",
  openGraph: {
    type: "website",
    url: "https://new.sopow.fr",
    title: "Sopow",
    description: "Web Developer / Designer / Student based in France",
    images: [
      {
        url: img,
        width: 1200,
        height: 630,
        alt: "Sopow",
      },
    ],
  },
  twitter: {
    title: "Sopow",
    creator: "@gsopow",
    description: "Web Developer / Designer / Student based in France",
    images: [
      {
        url: img,
        width: 1200,
        height: 630,
        alt: "Sopow",
      },
    ],
  },
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "sopow",
    "sopow.fr",
    "sopow web",
    "sopow website",
    "sopow portfolio",
    "sopow web developer",
    "sopow designer",
    "sopow student",
    "sopow france",
    "sopow french",
    "sopow discord",
    "sopow discord bot",
    "sopow bot",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-black h-screen w-screen flex xl:flex-row bg-[#ece7e1] changeable-bg overflow-hidden flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
