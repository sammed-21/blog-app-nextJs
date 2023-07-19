

import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const data = await getData();

  return (
    <div className="w-full">
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          key={item.id}
          className="flex justify-between items-center gap-4 my-5 sm:flexvsm:bg-red-300"
        >
          <div className="flex1">
            <Image
              src="https://images.pexels.com/photos/16790135/pexels-photo-16790135/free-photo-of-fog-over-bare-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
