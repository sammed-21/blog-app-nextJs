import "./globals.css";
import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
 
// import {ThemeProvider} from "../../context/ThemeContex"
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
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>

          <div className="container ">
            {/* <div className="max-sm:hidden sticky z-10 top-4 mb-7"> */}

            <Navbar />
            {/* </div> */}
            {children}

            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
