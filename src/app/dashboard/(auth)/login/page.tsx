"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Loading from "../../../loading";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p><Loading/></p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <div className="justify-center w-full min-h-[70vh] items-center flex   max-md:justify-center">
     
     <div className="items-center">
       <form
        className="  rounded-sm flex flex-col flex-1 space-y-2 justify-between"
        onSubmit={handleSubmit}
      >
        <input type="email" placeholder="email" className="inputtag py-3" />
        <input placeholder="password" type="password" className="inputtag" />
        <button className="w-full py-3 bg-blue-500">Login</button>
      </form>

      <p className="cursor-pointer" onClick={() => signIn("google")}>
        Login with google
        </p>
        <p>or</p>
        <Link href="/dashboard/register">Create new User</Link> 
    </div>
    </div>
  );
};

export default Login;
