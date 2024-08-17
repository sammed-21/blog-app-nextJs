"use client";
import SectionHeading from "./section-heading";

import { items } from "../lib/data";
import Project from "./project";

import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <motion.section ref={ref} id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid flex-col items-center grid-cols-1 gap-3 my-4 overflow-x-auto md:grid-cols-2 justify-evenly">
        {items.map((project, index) => {
          return (
            <div key={index} className="cols-span-1 md:cols-span-2 ">
              <Project key={project.id} {...project} />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
