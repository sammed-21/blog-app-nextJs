

import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`);

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const data = await getData();

  return (
    <div className="w-full">
      {data.map((item:any) => (
        <Link
          href={`/blog/${item._id}`}
          key={item.id}
          className="flex justify-between items-center gap-4 my-5 sm:flex  "
        >
          <div className="flex1">
            <Image
              src={item.img || "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
              alt={""}
              width={400}
              height={258}
              className=""
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
