// 'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "../components/AuthProvider";
import { motion } from "framer-motion";
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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative    dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        {/* <ThemeProvider> */}
          <AuthProvider>
            <div className="container relative flex flex-col max-sm:pr-5">
              <div className="">
              <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#e0dcff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>


              <Navbar />

              {children}
              </div>
              <div className="relative bottom-0 left-0 right-0 z-10 mt-4">
                <Footer />
              </div>
            
            </div>
          </AuthProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
