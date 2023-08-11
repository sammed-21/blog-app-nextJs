"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import main from "../../../../public/illustration.png";
import { items } from "./data.js";
import { motion, useScroll } from "framer-motion";
import PageWrapper from "../../page-wrapper";
import { useRef } from "react";

interface Item {
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

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChlidren: 0.3,
    },
  },
};
const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const getData = (cat: keyof Data) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }: { params: { category: keyof typeof items } }) => {
  const scrollRef = useRef(null);
  const category = params.category;
  const data = getData(category);
  return (
    <div
      
      className=" flex flex-col justify-between w-full min-h-[100vh] "
    >
      <motion.div>
        <div className="flex gap-5 ">
          <Button url="/portfolio" text="&larr; back" classname=" font-bold " />
          <h1 className=" font-bold text-4xl text-blue-600">
            {params.category}
          </h1>
        </div>

        {data?.map((item) => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex my-4 flex-warp-reverse justify-between gap-3 items-center max-md:hidden"
            key={item.id}
          >
            <div className="flex-1 flex flex-col gap-3">
              <h1 className="texth1">{item.title}</h1>
              <p className="text-md ">{item.desc}</p>
              <Button url="" text="See More" classname={""} />
            </div>
            <div className="flex-1 relative h-[400px] flex justify-center">
              <motion.img
                variants={images}
                src={item.image}
                alt={"this is the main img"}
                className=""
                width={500}
                height={300}
              />
            </div>
          </motion.div>
        ))}
        {/* mobile */}
        {data?.map((item) => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            key={item.id}
            className="flex justify-center items-center w-full max-sm:items-center max-md:flex-col-reverse max-md:justify-center max-h-screen max-sm:my-4 md:hidden "
          >
            <motion.div
              variants={variants}
              className=" flex flex-col max-md:flex-1 "
            >
              <h1 className="texth1">{item.title}</h1>
              <p className="text-sm ">{item.desc}</p>
              <Button url="" text="See More" classname={""} />
            </motion.div>

            <div className="w-300 h-200 max-md:flex-1">
              <motion.img
                variants={images}
                src={item.image}
                alt="there is a image"
                width={400}
                height={300}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
function notFound() {
  throw new Error("Function not implemented.");
}
