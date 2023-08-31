import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Head from "next/head";

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Sopow" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:url" content={metadata.twitterUrl} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta
          name="twitter:description"
          content={metadata.twitterDescription}
        />
        <meta name="twitter:image" content={metadata.twitterImage} />
        <meta name="twitter:creator" content="@GSopow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content={metadata.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />

        <meta charSet={metadata.charSet} />
        <meta name="viewport" content={metadata.viewport} />
        <meta
          name="google-site-verification"
          content={metadata.googleSiteVerification}
        />
        <link rel="icon" href="/favicon.ico" />
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
