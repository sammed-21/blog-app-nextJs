'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "../page-wrapper";

const PortfolioPage = () => {
  const galleryData = [
    {
      title: "Illustrations",
      imageUrl: "/illustration.png",
    },
    {
      title: "Websites",
      imageUrl: "/websites.jpg",
    },
    {
      title: "Applications",
      imageUrl: "/apps.jpg",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
      staggerChlidren:0.3
      }
    }
  }

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration:2
      }
    }
  }
  return (
    <>
      <PageWrapper>

      <h1 className="texth1 my-4">Choose a gallery</h1>
      <motion.div variants={variants} initial="hidden" animate="show" className="flex gap-10  text-white flex-wrap w-full max-md:flex-col max-md:items-center ">
        {galleryData.map((item, index) => {
          return (
            <Link
            href={`/portfolio/${item.title.toLowerCase()}`}>
            <motion.li
            variants={images}
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
              }}
              key={index}
              className="borderstyle"
              
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                },
                
              }}
              >
              <span className="titleh1 texth1    ">{item.title}</span>
              </motion.li>
              </Link>
              
              );
            })}
      </motion.div>
            </PageWrapper>
    </>
  );    
};

export default PortfolioPage;
