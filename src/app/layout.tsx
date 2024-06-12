import type { Metadata } from "next";
import { Inter, Exo } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${inter.variable} ${exo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
