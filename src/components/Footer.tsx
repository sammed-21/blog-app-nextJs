import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-[10vh] w-full bottom-0 bg-black-700 max-w-4xl  flex gap-4 pt-4 md:mx-auto md:justify-center justify-between relative my-3 max-md:mb-6 max-md:w-full items-center max-md:mt-10 border-t border-gray-300 max-sm:flex-col max-sm:pb-7">
      <div>&copy; 2023 Sammed, All rights reserved.</div>
      <div className="flex flex-wrap justify-between space-x-3 opacity-75">
        <Link href="https://github.com/sammed-21">
          <BsGithub size={25} />
        </Link>
        <Link href="https://twitter.com/samjain2001">
          {" "}
          <RiTwitterXFill size={25} />
        </Link>
        <Link href="https://www.linkedin.com/in/sammed-betadur-8b9b291a5/">
          {" "}
          <AiFillLinkedin size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
