"use client";

import React, { useEffect } from "react";
// import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "../lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  //   const { ref } = useSectionInView("Skills");
  const { ref } = useSectionInView('Skills')
  return (
    <motion.section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h1 className="text-center text-3xl font-bold py-4">My skills</h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
