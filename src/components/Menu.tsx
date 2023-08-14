"use client";

import React, { useState, useContext } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";
 
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className="z-100   justify-center flex items-center  ">
      {!open ? (
        <Image
          src="/icons8-menu-24.png"
          alt=""
          width={30}
          height={30}
          onClick={(prev) => setOpen(true)}
        />
      ) : (
        <Image
          className="invert"
          src="/cross.png"
          alt=""
          width={30}
          height={30}
          onClick={(prev) => setOpen(false)}
        />
      )}

      {open && (
        <div
          className={`${
            mode === "light" ? "text-white" : "text-white"
          } transition-opacity flex flex-col items-center gap-4 absolute  right-0 h-[calc(100vh-10vh)] w-full text-2xl justify-center  top-[10vh]  backdrop-filter bg-black backdrop-blur-xl z-100  bg-opacity-90 min-screen-h `}
        > 
          {links.map((link) => (
            <Link key={link.id} href={link.url}  onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button
              className="bg-blue-600 py-1  px-3 rounded-lg text-white"
              onClick={() => signOut}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
