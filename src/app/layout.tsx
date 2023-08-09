// 'use client'
import "./globals.css";
import type { Metadata } from "next";
 
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { motion } from 'framer-motion';

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
            <div
             
              className="container flex flex-col ">
              
                 <Navbar />
              

              {children}

              <Footer />
              <div className = "cursor"></div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
