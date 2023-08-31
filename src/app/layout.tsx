import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const img = "https://i.imgur.com/3gduCMH.png";

export const metadata = {
  title: "Sopow | Portfolio",
  description: "Personal website created by Sopow",
  url: "https://www.sopow.ga/",
  image: img, // Remplacez img par la valeur appropriée
  twitterCard: "summary_large_image",
  twitterUrl: "https://www.sopow.ga/",
  twitterTitle: "Sopow | Portfolio",
  twitterDescription: "Personal website created by Sopow available on Github",
  twitterImage: img, // Remplacez img par la valeur appropriée
  themeColor: "#011627",
  charSet: "utf-8",
  viewport: "width=device-width, initial-scale=1.0",
  googleSiteVerification: "tf06sdvU_f3DljkLJ8cemWHYRSgoxYhyUuym9L00BT8",
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
