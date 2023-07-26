import Image from "next/image";
import Hero from "../../public/crypto-devs.png";
import Button from "@/components/Button/Button";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      {/* <div className='max-w-screen  flex  h-full flex-wrap flex-shrink-0  items-center px-6   '> */}
      <div className="relative max-w-screen min-h-[80vh] flex justify-center items-center px-6 max-md:flex-col-reverse overflow-hidden max-sm:items-center  max-sm:mt-9 ">
        <div className="flex-1   justify-cetner flex gap-[50px]  flex-col">
          <h1 className="text-7xl font-semibold text-transparent bg-gradient-to-b from-blue-500 to-gray-400 bg-clip-text max-md:text-5xl ">
            Enhance the design of your digital product.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            consectetur. Quasi et facilis aliquam.
          </p>
          <Button text="See Our Work" url="/portfolio" classname={""} />
        </div>
        <div className="relative ">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow  "
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
