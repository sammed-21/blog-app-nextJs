"use client";
import Image from "next/image";
import Hero from "../app/assets/mainIconsdark (1).svg";
import Button from "./Button";
import Link from "next/link";

// import PageWrapper from "./page-wrapper";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useSectionInView } from "../lib/hooks";
import { Cover } from "./ui/cover";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <>
      {/* <PageWrapper> */}

      <motion.div
        ref={ref}
        id="home"
        className="relative scroll-mt-30  max-w-screen min-h-[70vh] flex justify-between items-center px-6 max-md:flex-col-reverse  max-sm:items-center  max-sm:mt-9 overflow-hidden scroll-mt-30"
      >
        <div className="flex-1  justify-cetner flex gap-[50px]  flex-col">
          <h1 className="font-semibold text-transparent text-white border-none text-7xl max-md:text-5xl ">
            <span className="text-transparent animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-black dark:bg-none dark:text-white bg-clip-text">
              {/* <span className="text-transparent animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text"> */}
              I&apos;m
              <br />
              Sammed S Betadur <Cover>Web3 Developer</Cover>
            </span>
          </h1>

          <p className="text-lg">
            I blend frontend creativity with the power of Web3.
            <br /> Crafting decentralized interfaces with Typescript,
            JavaScript,Next.js,Ether.js while empowering them using Solidity,
            Express, and Smart Contract, Ethereum .
            <br />
            Continuous learning drives my innovation in this dynamic,
            blockchain-powered world
          </p>

          <motion.div
            className="flex flex-col justify-start gap-2 text-lg font-medium sm:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link href="https://github.com/sammed-21">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                duration={0.4}
                className="flex items-center space-x-2 text-black bg-white dark:bg-black dark:text-white"
              >
                Github
              </HoverBorderGradient>
            </Link>
            <a
              className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
              href="Frontend_web3.pdf"
              download="Frontend_web3"
            >
              Download CV{" "}
              <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
            </a>

            {/* <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer max-md: borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/sammed-21"
          target="_blank"
        >
          <FaGithubSquare />
        </a> */}
          </motion.div>
        </div>
        <div className="relative flex justify-end flex-1">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow "
            width={400}
            height={500}
          />
        </div>
      </motion.div>

      {/* </PageWrapper> */}
    </>
  );
}
