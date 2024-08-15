"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import SectionHeading from "./section-heading";
import { items } from "../lib/data";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof items)[number];

export default function Project({
  title,
  desc,
  github,
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
    <div>
      <motion.div
        className="group flex mb-3 sm:mb-8 last:mb-0 min-h-[50vh]  w-full"
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
            >
              {desc}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={image}
                height="1000"
                width="1000"
                className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                alt={title}
              />
            </CardItem>
            <div className="flex flex-wrap gap-2 mt-4">
              {language.split(",").map((lang, id) => (
                <CardItem
                  key={id}
                  translateZ={20}
                  as="span"
                  className="bg-black/[0.7] max-w-fit px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {lang}
                </CardItem>
              ))}
            </div>
            <div className="flex items-center justify-between mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href={github}
                target="__blank"
                className="px-4 py-2 text-base font-normal rounded-xl dark:text-white"
              >
                github
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={link}
                className="px-4 py-2 text-sm font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
              >
                site
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}
