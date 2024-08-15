"use client";
import { experiencesData } from "../lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
const Experience: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <motion.div ref={ref} className="text-center" id="experience">
      <span className="text-3xl font-bold text-center"> Experience</span>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "1.3rem 2rem",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight:
                  //   theme === "light"
                  "0.4rem solid #9ca3af",
                //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "gray",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className=" !mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};
export default Experience;
