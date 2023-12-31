"use client";
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
interface Items {
  _id: string;
  img?: string;
  title?: string;
  body?: string;
}

const BlogPage = async () => {
  const fetcher = async (url: string) =>
    await fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<Items[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`,
    fetcher
  );

  return (
    <div className="w-full max-w-4xl">
      <div>
        <Link href={"/"}>
          <IoMdArrowRoundBack />
          back Home
        </Link>
      </div>
      {data?.map((item: Items, _index: any) => (
        <Link
          href={`/blog/${item._id}`}
          key={_index}
          // className="flex justify-between items-center gap-4 my-5 sm:flex max-md:flex-col-reverse drop-shadow-lg "
          className="flex justify-between items-center gap-4 my-5 sm:flex max-md:flex-col-reverse drop-shadow-lg "
        >
          <div className="flex1">
            <Image
              src={item.img || "/download (2).png"}
              alt={""}
              width={300}
              height={358}
              className="max-w-[400px] max-h-[458px]"
            />
          </div>
          <div className="flex-1 flex-col flex gap-4">
            <h1 className="texth1">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
