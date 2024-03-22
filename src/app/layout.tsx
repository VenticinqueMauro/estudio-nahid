
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: "Nahid & Asociados",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
