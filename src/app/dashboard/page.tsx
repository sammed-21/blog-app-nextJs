"use client";

import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Loading from "../loading";
// import { useRouter } from 'next/router';

const DashboardPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = async (url: string) => await fetch(url).then((res) => res.json());
  const { data,mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log(data);
  // Check if the session is still loading
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  // Check if the user is not authenticated, redirect to login
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return null;
  }

  // If the user is authenticated, use SWR to fetch data
  // const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  // Render the dashboard with fetched data or loading state\
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE"
      });
      mutate();
    } catch (error) {
      console.log("error")
    }
    
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate()
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  if (session.status === "authenticated") {
    return (
      <div className="mt-3 flex gap-[100px] max-md:flex-col">
        <div className="flex-1  mt-3  ">
          {isLoading
            ? <Loading/>
            : data?.map((post:any) => {
            return (

              <div
              className="flex items-center justify-between   gap-4 my-9 "
              key={post._id}
              >
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-cover w-full h-full"
                    src={post.img}
                    alt="image"
                    width={200}
                    height={100}
                    />
                </div>
                <h2 className="">{post.title}</h2>
                <span className="cursor-pointer text-red-700"  onClick={()=>handleDelete(post._id)}>X</span>
              </div>
            )
            })}
        </div>
        <form
          className="flex-1 flex  flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="texth1">Add New Post</h1>
          <input type="text" placeholder="title" className="inputtag " />
          <input type="text" placeholder="Desc" className="inputtag" />
          <input type="text" placeholder="Image" className="inputtag" />
          <textarea
            placeholder="content"
            className="inputtag"
            rows={10}
            cols={30}
          ></textarea>
          <button className="button w-full">Send</button>
        </form>
      </div>
    );
  }
};

export default DashboardPage;
