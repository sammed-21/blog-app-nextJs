import Image from "next/image";
import Sam from "../../../../public/sammed.jpeg"
 
import { notFound } from "next/navigation";
import { Metadata } from 'next'
async function getData(id: number) {
 
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}
 
// interface NewType {
//   id:number
// }
// either Static metadata
 
// or Dynamic metadata
// export async function generateMetadata(param: NewType) {
//   const post = await getData(param.id)
//   return {
//     title: post.title,
//     description: post.desc
//   }
// }


 

const Blog = async ({ params }: { params: { id: number } }) => {

  const data = await getData(params.id);

  return (

    <div className="flex flex-wrap relative top-0">

      <div className="flex mb-4 w-full justify-between flex-wrap max-xl:flex-col-reverse max-xl:items-center">
        <div className="flex-1 justify-between flex flex-col flex-wrap">
          <h1 className="texth1">{data.title} </h1>
          <p className="py-4 ">{data.desc}</p>
          <div className="flex gap-2 items-center"> <Image src={Sam} width={40} height={40} className="rounded-full" alt={""} />
          <p>sammed jain</p></div>
          
      </div>
        <div className="flex-1">
          <Image src={data.image} alt={""}
            width={600} height={258} className="w-[600px] h-[300px] " />
        </div>

      </div>
      <div>
        <p className="">

        {data.content} </p>
      </div>




    </div>
  );
};

export default Blog;
