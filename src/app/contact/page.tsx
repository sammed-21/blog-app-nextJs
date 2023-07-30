"use client";

import Image from "next/image";
 
  
import { useState ,useContext, useEffect} from "react";
 
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Loading from "../loading";
 
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
  })
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await axios.post("/api/contactform", { userForm });
   
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
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center  items-center gap-10" >
      <Toaster />
      <h1 className="texth1 max-md:text-xl ">Let's Keep in Touch</h1>
      <div className="flex justify-evenly w-full space-x-10 max-md:flex-col">
        <div className="flex-1 justify-center items-center w-full flex max-md:w-200 ">
          {loading ? <Loading /> :
            <Image
              src="/crypto-devs.png"
               className="animate-bounce-slow object-contain "
              width={300}
              height={300}
              alt="this is the image"
            />}
        </div>
        <form
          className={`flex flex-col flex-1 space-y-3 justify-between max-sm:justify-center `}
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
          <button type="button" className={`py-3 ${buttondisable?"bg-blue-300":"bg-blue-600"}`} disabled={buttondisable}>
     submit
</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
