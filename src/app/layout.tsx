import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const img = "https://i.imgur.com/3gduCMH.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Sopow</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sopow.fr/" />
        <meta property="og:title" content="Sopow | Portfolio" />
        <meta
          property="og:description"
          content="Personal website created by Sopow"
        />
        <meta property="og:image" content={img} />
        <meta
          name="google-site-verification"
          content="tf06sdvU_f3DljkLJ8cemWHYRSgoxYhyUuym9L00BT8"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.sopow.fr/" />
        <meta name="twitter:title" content="Sopow | Portfolio" />
        <meta
          name="twitter:description"
          content="Personal website created by Sopow available on Github"
        />
        <meta name="twitter:image" content={img} />
        <meta name="theme-color" content="#fff" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <div className="text-black h-screen w-screen flex xl:flex-row bg-[#ece7e1] changeable-bg overflow-hidden flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
