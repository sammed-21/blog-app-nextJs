// 'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { motion } from "framer-motion";
import Navbar from "@/src/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sammed Dev",
  description: "This is my description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" !scroll-smooth ">
      <body
        className={`${inter.className}bg-gray-50 max-w-5xl mx-auto w-full text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
