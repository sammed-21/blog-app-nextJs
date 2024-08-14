// 'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "../components/AuthProvider";
import ActiveSectionContextProvider from "../context/active-section-context";
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
    <html lang="en" className="dark !scroll-smooth ">
      <body
        className={`${inter.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <ThemeProvider> */}

        <AuthProvider>
          <div className="container relative flex flex-col max-sm:pr-5">
            {/* <div className=""> */}
            <div className="relative flex flex-col items-center justify-center w-full h-full ">
              {/* <div className="bg-[#e8b8ba] absolute top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.75rem] dark:bg-[#936161c1] "></div> */}
              <div className="absolute -top-[380px] left-0 w-full  -z-10">
                {/* <video
                  autoPlay
                  muted
                  loop
                  className="rotate-180   -z-10 w-full h-[80vh] object-cover"
                  // className="rotate-180 absolute top-[-200px] left-0 -z-10 w-full h-[80vh] object-cover"
                >
                  <source src="/blackhole.webm" type="video/webm" />
                </video> */}
                <div className="bg-gradient-to-r from-[#060019] via-[#0F062B] to-[#050016] absolute top-[50%] -z-10 right-[1rem] h-[61.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.75rem] dark:bg-[#030014] "></div>
              </div>
              <div className="bg-[#c6c1ec] absolute bottom-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] animate-pulse"></div>

              <ActiveSectionContextProvider>
                <Navbar />

                {children}
              </ActiveSectionContextProvider>
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
