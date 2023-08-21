 'use client'
import Image from "next/image";
import Hero from "../../public/crypto-devs.png";
import Button from "../components/Button"
import Link from 'next/link'
import PageWrapper from "./page-wrapper";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { motion, } from "framer-motion";
export default function Home() {
  return (
    <>
      {/* <div className='max-w-screen  flex  h-full flex-wrap flex-shrink-0  items-center px-6   '> */}
      <PageWrapper>

      <div className="relative  max-w-screen min-h-[70vh] flex justify-center items-center px-6 max-md:flex-col-reverse  max-sm:items-center  max-sm:mt-9 overflow-hidden">
        <div className="flex-1  justify-cetner flex gap-[50px]  flex-col">
        
          <h1 className="text-7xl font-semibold text-transparent text-white  border-none max-md:text-5xl ">
          {/* <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-b from-blue-500 to-gray-400 bg-clip-text border-none max-md:text-5xl "> */}
              {/* <span className="text-6xl animate-pulse bg-gradient-to-r from-blue-600 via-blue-500 to-violet-700 bg-clip-text"> I'm
              </span>  */}
              {/* <br /> */}
              <span className="animate-pulse bg-gradient-to-r from-blue-600 via-blue-500 to-violet-700 bg-clip-text text-transparent">
                I&apos;m
                <br/>
            Sammed S Betadur
              </span>
            </h1>
          
          <p className="text-lgs">
         
              Embarking from India, I fuse frontend artistry with backend wizardry.
            <br/>
              Crafting interfaces with HTML, CSS, JavaScript, and empowering them using Express and Next.js.
            <br/>
            Continuous learning fuels my innovation in this ever-evolving tech realm.
            </p>
            {/* <div className="flex w-1/2 space-x-3 justify-center">
            <motion.span
            className="absolute left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            
               
                <Link href="/portfolio">See Work</Link>
            <a href="/Cv.pdf" download={true} className="px-4 py-2 bg-blue-500 w-full">Download Cv</a>
          </motion.span>
            </div> */}
             <motion.div
        className="flex flex-col sm:flex-row justify-start gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          // onClick={() => {
          //   // setActiveSection("Contact");
          //   // setTimeOfLastClick(Date.now());
          // }} 
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

 

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
        </div>
          <div   className="relative ">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow  "
            width={400}
            height={500}
            />
        </div>
        </div>
    
            </PageWrapper>
    </>
  );
}
