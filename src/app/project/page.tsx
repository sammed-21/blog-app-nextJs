

"use client";
import Button from '../../components/Button';
import Image from "next/image";
// import main from "../../../../public/illustration.png";
import { items } from "../../lib/data";
import { motion } from "framer-motion";
 


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
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const getData = () => {
  const data = items;

  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }: { params: { category: keyof typeof items } }) => {
 
  const data = getData();
 
  return (
    <div
      
      className=" flex flex-col justify-between w-full min-h-[100vh] "

    >
   

      <motion.div  >
     

        {data?.map((item) => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            whileInView={{ opacity: 1 }}
         
            viewport={{ once: true, amount: 0.5 }}
            className="flex my-4 flex-warp-reverse justify-between gap-3 items-center max-md:hidden"
            key={item.id}
          >
            <div className="flex-1 flex flex-col gap-3">
              <h1 className="texth1">{item.title}</h1>
              <p className="text-md ">{item.desc}</p>
            
              <h3 className="">Language &amp; Framework : <span className='font-semibold '>{item.language}</span></h3>
              <Button url={item.link} text="See More" classname={""} />
            </div>
            <div className="flex-1 relative h-[400px] flex justify-center">
              <motion.img
                variants={images}
                src={item.image.src}
                alt={"this is the main img"}
                className=""
                width={item.image.width}
                height={item.image.height}
              />
            </div>
            <hr/>
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
              <Button url={item.link} text="Live Project" classname={""} />
            </motion.div>

            <div className="w-300 h-200 max-md:flex-1">
              <motion.img
                variants={images}
                src={item.image.src}
                alt="there is a image"
                width={item.image.width}
                height={item.image.height}
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
