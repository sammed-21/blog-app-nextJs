"use client"
 
import Link from "next/link"
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

const RegisterPage = () => {
    const [err, setError] = useState(false);
    const router= useRouter()
    const handleSubmit = async (e: any) => {
        
        e.preventDefault();
        const name  = e.target[0].value;
        const email  = e.target[1].value;
        const password  = e.target[2].value;
try {
    const res = await fetch('/api/auth/register',{
        method: "POST", 
        headers: {
            "Content-Type":"Applicatoin/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    res.status===201 && router.push("/dashboard/login?success=Account has been created")
    
} catch (error) {
    setError(true);
    
}
    }
  return (
      <div className=" justify-center w-full min-h-[70vh] items-center flex   max-md:justify-center">
          <div className=" items-center   ">
              
             <form className="  rounded-sm flex flex-col flex-1 space-y-2 justify-between" onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" className="inputtag" />
                    <input type="email" placeholder="email" className="inputtag py-3" />
                    <input placeholder="password" type="password" className="inputtag"/>
                    <button className="w-full py-4 bg-blue-500">Register</button>
              </form>
              {
                  err && "something went wrong"
              }
              <Link href="/dashboard/login">Login with an exitsing Account</Link>
          </div>
    </div>
  )
}

export default RegisterPage