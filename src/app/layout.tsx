import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "next/head";
import CustomCursor from "./components/CustomCursor";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const img = "https://i.imgur.com/3gduCMH.png"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sopow.fr"),
  title: "Sopow",
  description: "Web Developer / Designer / Student based in France",
  openGraph: {
    type: "website",
    url: "https://www.sopow.fr",
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
    "web developer",
    "designer",
    "student",
    "france",
    "portfolio",
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
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  );
}