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

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // const [activeSection, setActiveSection] =useState("home")
  return (
    <nav className="flex px-5  max-w-[80%] max-md:w-full md:min-w-[40%] left-1/2 h-18 -translate-x-1/2 py-3  items-center justify-between  fixed top-4 rounded-full z-10 backdrop-filter  backdrop-blur-xl  bg-opacity-50    ">
      <div className="flex items-center gap-2">
        {/* <DarkModeToggle /> */}
        {/* <ThemeSwitch /> */}
        <div className="items-center hidden gap-4 text-gray-950 dark:text-gray-300 md:flex">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={link.url}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.url}
                className={clsx(
                  "flex w-full   px-2 justify-center py-2 hover:text-gray-550 transition",
                  {
                    "text-gray-950": activeSection === link.title,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.title);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* <Link key={link.title} href={link.url} className={`${link.url === path ? "font-bold  " : "font-mono"}`}> */}
                <motion.div whileHover={{ scale: 1.1 }}>
                  {link.title}
                </motion.div>
                {link.title === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-md bg-gray-100/60 -z-10 "
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
        <div className="z-100 md:hidden ">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
