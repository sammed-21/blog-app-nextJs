import Button from "@/components/Button/Button";
import Image from "next/image";
import main from "../../../../public/illustration.png";
import { items } from "./data.js";

interface Item{
  id: number;
        title: string;
        desc: string;
        image: string;
}

interface Data {
  applications: Item[];
  illustrations: Item[];
  websites: Item[];
}
const getData = (cat:keyof Data) => {
  const data =items[cat]

  if (data) {
    return data
  }
  return notFound()
}
const Category = ({ params }: { params: { category: keyof typeof items } }) => {
  const category = params.category;
  const data = getData(category)
  return (
    <div className="flex flex-col justify-between w-full min-h-[100vh] ">
      <div className="flex gap-5 ">

        <Button url="/portfolio" text="&larr; back" classname=" font-bold "/>
      <h1 className=" font-bold text-4xl text-blue-600">

        {params.category}
      </h1>
      </div>

      {data?.map((item) => (
       
       
        <div className={`flex my-4 ${item.id & 1 ?"flex-row-reverse":""}  flex-wrap justify-between gap-3 items-center`} key={item.id}>
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="texth1">{item.title}</h1>
            <p className="text-md ">{item.desc}</p>
          <Button url="" text="See More" classname={""}/>
        </div>
        <div className="flex-1 relative h-[400px] flex justify-center">
          <Image src={item.image} alt={'this is the main img'} className="" fill={true} />

        </div>
      </div>
       
      
       ))}
       </div>
)};

export default Category;
function notFound() {
  throw new Error("Function not implemented.");
}

