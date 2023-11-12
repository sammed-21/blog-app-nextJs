"use client";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { items } from "../lib/data";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type ProjectProps = typeof items[number];
export default function Project({
  title,
  desc,
  image,
  link,
  language,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.13 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <Link href={link}>
      <motion.div
        className="group flex mb-3 sm:mb-8 last:mb-0 min-h-[50vh]  w-full"
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="flex  md:max-w-4xl w-full h-full md:w-full md:min-h-[310px] gap-3 relative  justify-center mx-auto flex-col items-center  border-[1px] border-gray-200 rounded-lg shadow md:flex-row ">
          <div className="w-full md:w-1/2 md:min-h-[310px] h-full  ">
            <Image
              width={1920 / 2}
              height={1280 / 2}
              className="object-cover  w-full rounded-t-lg md:min-h-[310px]  md:rounded-none md:rounded-s-lg"
              src={image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 justify-between p-2 leading-normal w-full md:w-1/2 tracking-[-0.9px]">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#FDF250] ">
              {title}
            </h5>
            <p className="text-gray-400 font-[DM Sans] text-lg font-normal leading-normal tracking-[-0.2px]">
              {desc}{" "}
            </p>
            <ul className="  mt-4 gap-2 flex h-full flex-wrap  ">
              {language.split(",").map((lang, id) => {
                return (
                  <>
                    <li
                      key={id + 1 * 10}
                      className="bg-black/[0.7] max-w-fit px-3 
                  py-1
                  text-[0.7rem] uppercase
                  tracking-wider
                  text-white
                  rounded-full"
                    >
                      {lang}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
