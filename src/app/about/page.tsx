'use client'
import React from "react";
import Image from "next/image";
import Hero from "../../../public/pexels-photo-3184339.jpeg";
 
import { motion } from "framer-motion";
import PageWrapper  from "../page-wrapper";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};



const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center  gap-8 mt-7 items-center">
        {/* Hero section */}
        <div className="relative w-full h-[300px]">
          {/* Image */}
          <Image
            className="w-full h-full object-cover grayscale brightness-50"
            src={Hero}
            alt="Main Image"
            width={400}
            height={500}
          />
          {/* Text */}
          <motion.div
             variants={variants}
             initial="hidden"
             animate="show"
             className="absolute bottom-8 left-5 max-sm:text-lg text-white"
          >
            <h1 className="text-4xl font-bold">Web Developer</h1>
            <h2 className="text-xl">
              Bringing Life to the Web with Frontend and Backend Magic
            </h2>
          </motion.div>
        </div>

        {/* About Me section */}
        <motion.div variants={variants} initial="hidden" animate="show" className="text-center max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <p className="text-lg">
            I am Sammed, a passionate web developer with expertise in both frontend and backend technologies. I specialize in creating modern, responsive, and user-friendly web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Who are We section */}
    <Skills/>
        {/* Experience section */}
        <motion.div variants={variants} initial="hidden" animate="show" className=" ">
         
          <Experience/>
       
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
