import React from "react";
import Image from "next/image";
import Hero from "../../../public/pexels-photo-3184339.jpeg";
import Button from "@/components/Button/page";
const AboutPage = () => {
  return (
    <div className="flex flex-col justify-around gap-4">
      <div className=" relative">
        <Image
          className="w-[100%] h-[300px] object-cover"
          src={Hero}
          alt={"this is the main img"}
          width={400}
          height={500}
        />
        <div className="absolute bottom-8 font-bold text-4xl left-5 bg-blue-500 text-white">
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital expriences</h2>
        </div>
      </div>

      <div className="flex bg-black-400 gap-9 py-4">
        <div className="flex-1 w-1/4  ">
          <h1 className="texth1 ">Who are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Molestiae fugit accusantium reprehenderit adipisci nam sit
            necessitatibus error, delectus ipsum deserunt. Eligendi commodi
            omnis veniam assumenda, repellendus rerum architecto modi eos.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Molestiae fugit accusantium reprehenderit adipisci nam sit
            necessitatibus error, delectus ipsum deserunt. Eligendi commodi
            omnis veniam assumenda, repellendus rerum architecto modi eos.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Molestiae fugit accusantium reprehenderit adipisci nam sit
            necessitatibus error, delectus ipsum deserunt. Eligendi commodi
            omnis veniam assumenda, repellendus rerum architecto modi eos.
          </p>
        </div>

        <div className="flex-1 flex justify-evenly flex-col gap-4">
          <h1 className="texth1">Who are We?</h1>
          <p className="gap-3 flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Molestiae fugit accusantium reprehenderit adipisci nam sit
            necessitatibus error, delectus ipsum deserunt. Eligendi commodi
            omnis veniam assumenda, repellendus rerum architecto modi eos.
            <br />
            <br />
            -Creative Illustrations
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />
            -Fast and Handy Mobile App
            <br />
          </p>
          <Button text="contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
