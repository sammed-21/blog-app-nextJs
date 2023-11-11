'use client'
import React, { useEffect } from "react";
// import Image from "next/image";
// import Hero from "/public/pexels-photo-3184339.jpeg";
 
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "../lib/hooks";
// import PageWrapper  from "../page-wrapper";
// import Experience from "@/components/Experience";
// import Skills from "@/components/Skills";

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
  const { ref } = useSectionInView('About')
   return (
    // <PageWrapper>
      <motion.section ref={ref} id="about" className="flex flex-col justify-center  gap-8 mt-7 items-center scroll-mt-30">
        {/* Hero section */}
        {/* <div className="relative w-full h-[300px]"> */}
          {/* Image */}
          {/* <Image
            className="w-full h-full object-cover grayscale brightness-50"
            src={Hero}
            alt="Main Image"
            width={400}
            height={500}
          /> */}
          {/* Text */}
          {/* <motion.div
             variants={variants}
             initial="hidden"
             animate="show"
             className="absolute bottom-8 left-5 max-sm:text-lg text-white"
          >
            <h1 className="text-4xl font-bold">Web Developer</h1>
            <h2 className="text-xl">
              Bringing Life to the Web with Frontend and Backend Magic
            </h2>
          </motion.div> */}
        {/* </div> */}

        {/* About Me section */}
        <motion.div variants={variants} initial="hidden" animate="show" className="text-center max-w-2xl">
          <SectionHeading  >About Me</SectionHeading>
          {/* <p className="text-lg">
            I am Sammed, a passionate web developer with expertise in both frontend and backend technologies. I specialize in creating modern, responsive, and user-friendly web applications that deliver exceptional user experiences.
          </p> */}
               {/* <p className="mb-3">
        I am graduate with a degree in{" "}
        <span className="font-medium">Computer Science</span>. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js,TailwindCss, Node.js, MongoDB and Blockchain
        </span>
        . I am also familiar with TypeScript . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
         <p className="mb-3">
    I hold a degree in <span className="font-medium">Computer Science</span>. I expanded my skills through a coding bootcamp, specializing in{" "}
    <span className="font-medium">full-stack web development</span>.{" "}
    <span className="italic">What truly captivates me in programming</span> is the
    challenge-solving facet. The exhilaration of finally unlocking a solution is a sentiment I deeply cherish. My expertise centers around{" "}
    <span className="font-medium">
        React, Next.js, Tailwind CSS, Node.js, MongoDB, and Blockchain
    </span>
    . I'm also well-acquainted with TypeScript. My enthusiasm for adopting fresh technologies is unceasing. Currently, I'm actively seeking a{" "}
    <span className="font-medium">full-time software developer role</span>.
</p>
        </motion.div>

        {/* Who are We section */}
    {/* <Skills/> */}
        {/* Experience section */}
        <motion.div variants={variants} initial="hidden" animate="show" className=" ">
         
          {/* <Experience/> */}
       
        </motion.div>
      </motion.section>
    // </PageWrapper>
  );
};

export default AboutPage;
