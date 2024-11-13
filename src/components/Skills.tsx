"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { GridBackgroundDemo } from "./GradientBackground";

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
  const { ref } = useSectionInView("Skills");
  return (
    <motion.section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <GridBackgroundDemo className={"flex flex-col gap-4"}>
        <h1 className="py-4 text-3xl font-bold text-center">My skills</h1>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="px-5 py-3 bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
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
      </GridBackgroundDemo>
    </motion.section>
  );
}
