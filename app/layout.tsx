import type { Metadata } from "next";
import {Oswald,Pixelify_Sans } from "next/font/google";
import "./globals.css";

const OswaldSans = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});

const Pixel=Pixelify_Sans({
  variable:"--font-pixel",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "PuiCoin",
  description: "Pussy on Sui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OswaldSans.variable} ${Pixel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
