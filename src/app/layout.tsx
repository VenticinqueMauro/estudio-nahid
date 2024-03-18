
import type { Metadata } from "next";
import { Noto_Serif_Kannada } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto = Noto_Serif_Kannada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
