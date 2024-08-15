import Intro from "../components/intro";
import AboutPage from "../components/about";
import Projects from "../components/projects";
import ContactPage from "../components/contact";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

import SectionDivider from "../components/section-divider";
// import Experience from "../components/experience";
//  import Skills from "../components/skills"

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1320px] w-full mx-auto items-center px-4 scroll-mt-30">
      <Intro />
      <SectionDivider />
      <AboutPage />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      {/* <SectionDivider/> */}

      <ContactPage />
      {/* <PageWrapper>

      <div className="relative  max-w-screen min-h-[70vh] flex justify-center items-center px-6 max-md:flex-col-reverse  max-sm:items-center  max-sm:mt-9 overflow-hidden">
        <div className="flex-1  justify-cetner flex gap-[50px]  flex-col">
        
          <h1 className="font-semibold text-transparent text-white border-none text-7xl max-md:text-5xl ">
        
          <span className="text-transparent animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-black dark:bg-none dark:text-white bg-clip-text">
                 I&apos;m
                <br/>
            Sammed S Betadur
              </span>
            </h1>
          
          <p className="text-lgs">
         
              Embarking from India, I fuse frontend artistry with backend wizardry.
            <br/>
              Crafting interfaces with HTML, CSS, JavaScript, and empowering them using Express and Next.js.
            <br/>
            Continuous learning fuels my innovation in this ever-evolving tech realm.
            </p>
         
             <motion.div
        className="flex flex-col justify-start gap-2 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/contact"
          className="flex gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
     
        >
          Contact me {" "}
          
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          href="/Resume_Sammed.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a> */}

      {/* <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer max-md: borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/sammed-21"
          target="_blank"
        >
          <FaGithubSquare />
        </a> */}
      {/* </motion.div>
        </div>
          <div   className="relative flex justify-center flex-1">
          <Image
            src={Hero}
            alt={"this is the main img"}
            className="animate-bounce-slow "
            width={400}
            height={500}
            />
        </div>
        </div>
    
      </PageWrapper> */}
    </main>
  );
}
