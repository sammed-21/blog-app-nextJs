import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

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
          <div className="container ">
            {/* <div className="max-sm:hidden"> */}

            <Navbar />
            {/* </div> */}
            {children}

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
