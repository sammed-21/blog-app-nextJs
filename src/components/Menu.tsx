"use client";

import React, { useState, useContext } from "react";
// import DarkModeToggle from "./DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { ThemeContext } from "../context/ThemeContext";
import { links } from "../lib/data";

const Menu = () => {
  const session = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center z-100 ">
      {!open ? (
        <Image
          src="/icons8-menu-24.png"
          alt=""
          width={30}
          height={30}
          className="text-black dark:bg-transparent dark:text-white "
          onClick={(prev) => setOpen(true)}
        />
      ) : (
        <Image
          src="/icons8-close-64.png"
          alt=""
          width={30}
          height={30}
          className="text-black dark:bg-transparent dark:text-white "
          onClick={(prev) => setOpen(false)}
        />
      )}

      {open && (
        <div
          className={` 
       transition-opacity flex flex-col items-center gap-4 absolute  right-0 h-[calc(100vh-10vh)] w-full text-2xl justify-center  top-[10vh]  backdrop-filter bg-black backdrop-blur-xl z-100  bg-opacity-90 min-screen-h `}
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="!text-white"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button
              className="px-3 py-1 text-white bg-blue-600 rounded-lg"
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

export default Menu;
