 'use client'
import Image from "next/image";
import Hero from "../../public/crypto-devs.png";
import Button from "@/components/button/Button";
import PageWrapper from "./page-wrapper";

import { motion, } from "framer-motion";
export default function Home() {
  return (
    <>
      {/* <div className='max-w-screen  flex  h-full flex-wrap flex-shrink-0  items-center px-6   '> */}
      <PageWrapper>

      <div className="relative  max-w-screen min-h-[70vh] flex justify-center items-center px-6 max-md:flex-col-reverse overflow-hidden max-sm:items-center  max-sm:mt-9 overflow-hidden">
        <div className="flex-1   justify-cetner flex gap-[50px]  flex-col">
        
          <h1 className="text-7xl font-semibold text-transparent text-white  border-none max-md:text-5xl ">
          {/* <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-b from-blue-500 to-gray-400 bg-clip-text border-none max-md:text-5xl "> */}
              {/* <span className="text-6xl animate-pulse bg-gradient-to-r from-blue-600 via-blue-500 to-violet-700 bg-clip-text"> I'm
              </span>  */}
              {/* <br /> */}
              <span className="animate-pulse bg-gradient-to-r from-blue-600 via-blue-500 to-violet-700 bg-clip-text text-transparent">
                I'm
                <br/>
            Sammed S Betadur
              </span>
            </h1>
          
          <p className="text-lgs">
          Becomeing a Full Stack Developer with passion for UI from India.
          </p>
          <Button text="See Our Work" url="/portfolio" classname={""} />
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
