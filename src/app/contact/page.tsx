"use client";

import Image from "next/image";
 
import Hero from "../../../public/crypto-devs.png";

import { useState ,useContext, useEffect} from "react";
 
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Loading from "../loading";
import PageWrapper from "../page-wrapper";
 
const ContactPage = () => {
 
  const [loading, setLoading] = useState(false);
  const [buttondisable, setButtonDisable] = useState(true);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (userForm.name.length > 0 && userForm.email.length > 0 && userForm.message.length > 0) {
      setButtonDisable(false);
    }
    else {
      setButtonDisable(true)
    }
  },[userForm])
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('this e down')
    try {
      
 
      setLoading(true);
      console.log('loader is se true')

    const response = await axios.post("/api/contactform", { userForm });
   console.log('response back from the server')
    if (response.data.success) {
      toast.success("form submited !");
      setLoading(false);
    } else {
      toast.error("fill the form");
      setLoading(false);
    }
    setUserForm({
      name: "",
      email: "",
      message: "",
    })
      setLoading(false);
    } catch (error:any) {
      throw new Error(error.message);
    }
    finally {
      setLoading(false);
    }
  };
  return (
      <PageWrapper>
    <div className="relative w-[100%]  min-h-[70vh] items-center flex flex-col overflow-hidden max-sm:overflow-hidden  " >
      <Toaster />
      {loading ? <Loading /> :<div className="flex flex-col text-center w-full items-center justify-between max-md:flex-col">
      <h1 className="texth1 w-full text-center max-md:text-xl">Keep in Touch</h1>
      <div className="relative flex items-center  max-w-screen overflow-hidden py-4 justify-evenly max-md:flex-col  ">
      <div   className="relative ">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow  "
            width={400}
            height={500}
            />
        </div>
               {/* <div   className="relative  ">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow  "
            width={400}
            height={500}
            />
        </div> */}
        <form
          className={`flex-1 relative max-w-full flex flex-col max-w-1/2  space-y-3 justify-between max-sm:justify-center  max-md:justify-center max-md:min-w-screen`}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="name"
            value={userForm.name}
            className="inputtag"
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, name: e.target.value }))
            }
            />
          <input
            type="email"
            placeholder="email"
            value={userForm.email}
            className="inputtag py-3"
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <textarea
            placeholder="message"
            className="inputtag max-sm:w-200"
            cols={30}
            rows={10}
            value={userForm.message}
            onChange={(e) =>
              setUserForm({ ...userForm, message: e.target.value })
            }
            />
          <button type="submit" className={`py-3 ${buttondisable?"bg-blue-300":"bg-blue-600"}`} disabled={buttondisable}>
     submit
</button>
        </form>
      </div>
      </div>
        }
    </div>
        </PageWrapper>
  );
};

export default ContactPage;

