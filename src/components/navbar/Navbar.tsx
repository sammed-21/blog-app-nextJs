"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
 

const links = [
    {
        id: 1,
        title: "Home",
        url:"/"
    },
    {
        id: 2,
        title: "Portfolio",
        url:"/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url:"/blog"
    },
    {
        id: 4,
        title: "About",
        url:"/about"
    },
    {
        id: 5,
        title: "Contact",
        url:"/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url:"/dashboard"
    },
]

const Navbar = () => {
    const session = useSession()
    const router = useRouter()
  return (
      <div className='flex h-[10vh] items-center justify-between px-4'>
          <Link href="/">
              IamSAMMED
         </Link>
          <div className='flex items-center space-x-6'>
              <DarkModeToggle/>
            {links.map((link)=>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
              {session.status === "authenticated" && 
              <button className="bg-blue-600 py-1  px-3 rounded-lg text-white" onClick={signOut}>Logout
              </button>
              }
            </div>
         
    </div>
  )
}

export default Navbar