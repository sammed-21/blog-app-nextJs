import Image from "next/image";
import Sam from "../../../../public/sammed.jpeg";

import { notFound } from "next/navigation";
import { Metadata } from "next";

async function getData(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Blog = async ({ params }: { params: { id: number } }) => {
  const data = await getData(params.id);

  return (
    <div className="flex flex-wrap relative top-5 justify-center max-w-4xl w-full">
      <div className="flex mb-4 w-full justify-between flex-wrap max-xl:flex-col-reverse max-xl:items-center">
        <div className="flex-1 justify-between flex flex-col flex-wrap">
          <h1 className="texth1">{data?.title} </h1>
          <p className="py-4 ">
            <span className="font-semibold">description</span>: {data?.desc}
          </p>
          <div className="flex gap-2 items-center">
            {" "}
            <Image
              src={Sam}
              width={40}
              height={40}
              className="rounded-full"
              alt={""}
            />
            <p>{data?.username}</p>
          </div>
        </div>

        <div className="flex-1 relative h-[400px] flex   justify-center">
          <Image
            src={data?.img}
            alt={data?.title}
            width={600}
            height={258}
            className="w-[600px] h-[300px] object-contain"
          />
        </div>
      </div>
      <div>
        <p className="text-xl">{data?.content} </p>
      </div>
    </div>
  );
};

export default Blog;
