import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/Button/page";
// import Hero from "../../public/crypto-devs.png";
export const metadata: Metadata = {
    title: "Sammed Dev Contact Page",
    description: "This is my contact page",
  };
  
 

const ContactPage = ( ) => {
    return (

        <div className="w-full max-h-screen flex flex-col justify-center items-center gap-10">
            <h1 className="texth1 ">Let's Keep in Touch</h1>
            <div className="flex justify-evenly w-full space-x-10 max-xl:flex-col">
                <div className="flex-1 justify-center items-center w-full flex">

                    <Image src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1689590534~exp=1689591134~hmac=b90daaa339338a5c58f6e42fd83659cac7544000855da6861f5c8da1d54bdc22"
                        className='animate-bounce-slow object-contain 'width={400}height={400}  alt="this is the image" />
                </div>
                <form className="flex flex-col flex-1 space-y-3 justify-between">
                    <input type="text" placeholder="name" className="inputtag" />
                    <input type="email" placeholder="email" className="inputtag py-3" />
                    <textarea placeholder="message" className="inputtag" cols={30} rows={10} />
                    <Button url="" text="send"/>
                </form>
            
            
            </div>
            
        </div>
    )
}

export default ContactPage
