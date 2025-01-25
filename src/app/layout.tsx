import type { Metadata } from "next";
import { Inter, Exo } from "next/font/google";
import "./globals.css";
import Header from "./_elements/Header";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const exo = Exo({
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_META_TITLE,
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? (process.env.NEXT_PUBLIC_URL as string)
      : "http://localhost:3000",
  ),
  openGraph: {
    images: [
      {
        url: "/meta-image.png",
        width: 410,
        height: 200,
        alt: "Wizad.ai Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <Script
        src="//in.fw-cdn.com/32184767/1166573.js"
        data-chat="true"
        strategy="lazyOnload"
      />
      <body className={`${inter.variable} ${exo.variable} font-sans`}>
        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
