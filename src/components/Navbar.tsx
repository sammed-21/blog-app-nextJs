"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
// import DarkModeToggle from "./DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
 
import Menu from "./Menu";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";

import clsx from "clsx";
import { links } from "../lib/data";
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "../context/active-section-context";

const Navbar = () => {
  const session = useSession();

  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  // const [activeSection, setActiveSection] =useState("home")
  return (
    <nav className="flex px-5  min-w-[70%] left-1/2 h-14 -translate-x-1/2 py-3  items-center justify-between  fixed top-4 rounded-lg z-10 backdrop-filter bg-gray-800 backdrop-blur-xl  bg-opacity-50    ">
      <Link href="/">
        <h2 className="font-bold-xl group bg-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 font-mono  p-2 tracking-widest">
          SAMMED
        </h2>
      </Link>
      <div className="flex gap-2 items-center">
        {/* <DarkModeToggle /> */}
        <ThemeSwitch />
        <div className="hidden text-gray-950 dark:text-gray-300 md:flex gap-4 items-center">
          {links.map((link) => (
            <motion.li
              className="h-3/4 relative flex items-center justify-center"
              key={link.url}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            > 
              <Link
                href={link.url}
                className={clsx(
                  "flex w-full   px-2 justify-center py-2 hover:text-gray-950 transition",
                  {
                    "text-gray-950": activeSection === link.title,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.title)
                  setTimeOfLastClick(Date.now());
                }}

              >
                {/* <Link key={link.title} href={link.url} className={`${link.url === path ? "font-bold  " : "font-mono"}`}> */}
                <motion.div whileHover={{ scale: 1.1 }}>
                  {link.title}
                </motion.div>
                {link.title === activeSection && (
                  <motion.span
                    className="bg-gray-100/60 
                  rounded-md absolute inset-0 -z-10 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",

                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          {session.status === "authenticated" && (
            <button
              className={` bg-blue-600 py-1  px-3 rounded-lg text-white`}
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>
        {/* MOBILE MENU */}
        <div className="z-100 md:hidden  ">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
