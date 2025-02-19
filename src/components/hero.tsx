import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import TypingEffect from "../utils/TypingEffect";
import { SectionWrapper } from "../hoc";
import github from "../assets/socials/github.svg";
import { DiGithubBadge } from "react-icons/di";
import { TiArrowDownOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

// Hero
export const Hero = () => {
  const navigate = useNavigate();
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const isConfirmed = window.confirm("Do you want to download Vishnu's Resume?");
    if (!isConfirmed) {
      e.preventDefault(); // Stop the download if not confirmed
    }
  };
  return (
    <SectionWrapper idName="home">
    <section className="relative w-full min-h-screen mx-auto">
      <div
    className={cn(
      styles.paddingX,
      "absolute inset-0 top-[120px] max-w-7xl mx-auto flex sm:flex-row flex-col items-start justify-between gap-5",
    )}
  >
    {/* Left Section - Title & About Me */}
    <div className="flex flex-row items-start gap-5 w-3/4">
      {/* Decorative Line */}
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      {/* About Me */}
      <div>
        <h1 className={cn(styles.heroHeadText, "text-white")}>
          Hi, I'm <span className="text-[#915eff]">Vishnu</span>
        </h1>
        <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
        <TypingEffect /> <br />
          ReactJS, NodeJS, TypeScript, MongoDB, ExpressJS, NextJS, ThreeJS and more.
        </p> 
        <p className={cn(styles.heroSubText, "mt-5 text-white-100")}>
          M.S in Computer Science from California State University, Fullerton. (Jan 2023 - Dec 2024)
        </p>
        <p className={cn(styles.heroSubSubText, "mt-5 text-white-100")}>
          My E-Mail: vishnu3276@gmail.com
        </p>
        <div className="flex items-center">
        <button className="group flex items-center gap-2 bg-transparent mt-5 py-2 px-6 outline-none w-fit text-white hover:bg-white hover:text-tertiary font-bold shadow-md shadow-primary hover:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.8)] rounded-xl disabled:bg-tertiary/20 disabled:text-white/60">
          <a
             href="https://github.com/vishnuyvr?tab=repositories"
             target="_blank"
             rel="noreferrer noopener"
             className="flex items-center gap-2"
            >
              <DiGithubBadge className="w-8 h-8" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 GitHub
              </span>
          </a>
        </button>

        <button className="group flex items-center gap-1 bg-transparent mt-5 ml-6 py-3 px-4 outline-none w-fit text-white hover:bg-white hover:text-tertiary font-bold shadow-md shadow-primary hover:shadow-[0px_0px_8px_2px_rgba(255,255,255,0.8)] rounded-xl disabled:bg-tertiary/20 disabled:text-white/60">
        <a
           href="/Vishnu_Resume.pdf"  
           download="Vishnu Resume.pdf" 
           onClick={handleDownload}
           className="flex items-center gap-2"
            >
              My Resume 
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <TiArrowDownOutline />
              </span>
          </a>

        </button>
</div>

      </div>
    </div>

    {/* Right Section - Profile Photo */}
    <div className="w-1/4 flex justify-center items-center">
      <img
        src="/profile-2.jpg"
        alt="Vishnu"
        className="w-full h-auto rounded-lg object-cover shadow-lg"
      />
    </div>
  </div>
        

      {/* Computer Model 
      <div className="relative top-[60px] w-full h-[600px]">
      <ComputersCanvas />
      </div>
      {/* Scroll to about section 
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
    </SectionWrapper>
  );
};


