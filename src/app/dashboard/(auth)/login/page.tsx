"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter()

  if (session.status === "loading") {
    return <p>loading..</p>
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials",{email,password})

  }
  return (
 
 
                <div className=" items-center flex flex-col ">
              
              <form className=" rounded-sm flex flex-col flex-1 space-y-3 justify-between" onSubmit={handleSubmit}>
                      <input type="email" placeholder="email" className="inputtag py-3" />
                     <input placeholder="password" type="password" className="inputtag"/>
                     <button className="w-full py-4 bg-blue-500">Login</button>
               </form>
               
               <button className='button' onClick={()=> signIn("google")}>Login with google</button>
            </div>
   
  )
}

export default Login