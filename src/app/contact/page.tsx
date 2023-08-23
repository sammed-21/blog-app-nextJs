"use client";

 
import { useState ,useContext, useEffect} from "react";
 
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Loading from "../loading";
import { motion } from "framer-motion";
 
 
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
    <motion.section
    id="contact"
   
    className="mb-20 sm:mb-28 max-screen-w flex justify-center text-center items-center mt-5"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
  >
    <div className="  flex flex-col gap-4  justify-center  min-h-[70vh] items-center  overflow-hidden    " >
      <Toaster />
        {loading ? <Loading /> : <div className="flex flex-col text-center w-full items-center justify-center max-md:flex-col">
          <div className = "my-2">

      <h1 className="texth1 w-full text-center max-md:text-xl">Keep in Touch</h1>
          <div className="w-full flex flex-col py-4 justify-evenly max-md:min-screen-w max-md:flex-col max-sm:px-2 max-md:item-center  ">
          <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sammed2110@gmail.com">
          sammed2110@gmail.com
        </a>{" "}
        or through this form.
              </p>
              </div>
      {/* <div   className="relative flex-1 min-screen-w max-w-[400px] max-h-[500px]">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow object-contain "
            width={400}
            height={500}
            />
        </div> */}
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
          className={`flex-2 relative  flex flex-col   space-y-3 justify-between max-md:flex-2 max-sm:justify-center  max-md:justify-center max-md:min-w-screen`}
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
        </motion.section>
  );
};

export default ContactPage;

