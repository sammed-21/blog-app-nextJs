// 'use client'
import "./globals.css";
import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "../components/AuthProvider";
import { motion } from "framer-motion";

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
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="container relative flex flex-col max-sm:pr-5">
              <div className="">

              <Navbar />

              {children}
              </div>
              <div className="relative bottom-0 left-0 right-0 z-10 mt-4">
                <Footer />
              </div>
            
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
