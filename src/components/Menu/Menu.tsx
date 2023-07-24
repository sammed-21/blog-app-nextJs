"use client";

import React, { useState } from "react";
import DarkModeToggle from "../DarkModToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  return (
    <div className="z-50 justify-center flex items-center space-x-6  ">
      {/* <div className="flex items-center space-x-6 max-lg:hidden">
                  
            {links.map((link)=>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
              {session.status === "authenticated" && 
              <button className="bg-blue-600 py-1  px-3 rounded-lg text-white" onClick={()=>signOut}>Logout
              </button>
              }
              </div> */}
      {!open ? (
        <Image
          src="/icons8-menu-24.png"
          alt=""
          width={20}
          height={20}
          onClick={(prev) => setOpen(true)}
        />
      ) : (
        <Image
          className="bg-clip-content invert bg-white text-white"
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={(prev) => setOpen(false)}
        />
      )}
      <div className="absolute right-10 h-[100vh] w-full left-0 top-[40px] backdrop-filter bg-black backdrop-blur-xl  min-screen-h flex flex-col z-50 ">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
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
    </div>
  );
};

export default Navbar;
