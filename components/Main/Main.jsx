import React from "react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Typist from "react-text-typist";

const Main = () => {
  return (
    <section className="h-screen relative" id="main">
      <div className="bg-slate-900/70 flex items-center justify-center w-full h-full">
        <div className=" flex flex-col justify-center items-center gap-5 w-[70%]">
          <Fade direction="left" triggerOnce duration={2000}>
            <p className="text-3xl text-slate-100 font-bold md:text-4xl lg:text-5xl tracking-wide ">
              Hi, I'm Eliezer!
            </p>
            <Typist
              sentences={[
                "Passionate Web Developer",
                "Critical Thinker",
                "Effective Problem Solver",
              ]}
              loop={true}
              typingSpeed={150}
              startDelay={200}
              className="text-slate-100 text-xl md:text-2xl lg:text-3xl font-semibold"
            />
            <p className="text-slate-100 text-center text-sm font-medium md:text-lg lg:text-xl tracking-wide ">
              Committed to delivering quality results and exceeding client
              expectations. I constantly challenge myself to take on new
              projects and broaden my skillset. My focus and creativity allow me
              to bring unique and innovative ideas to the table. I am always
              learning and staying current with the latest technologies to
              ensure optimal performance and user experience.
            </p>
            <div className="flex gap-3">
              <Link href="#about">
                <button className="bg-transparent font-semibold text-slate-100 border-2 border-slate-100 text-sm lg:text-lg md:text-base py-3 px-2 rounded-lg hover:-translate-y-1 ">
                  Read More
                </button>
              </Link>
              <Link href="#contact">
                <button className="bg-transparent font-semibold text-slate-100 border-2 border-slate-100 text-sm lg:text-lg md:text-base py-3 px-2 rounded-lg  hover:-translate-y-1">
                  Contact Me
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <div className="absolute left-[8px] top-[50%] transform -translate-y-1/2 flex flex-col">
        <a href="https://github.com/earuiz1" target="_blank">
          <FaGithubSquare
            size={34}
            className="cursor-pointer fill-slate-100 hover:-translate-y-1"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eliezer-ruiz-torres/"
          target="_blank"
        >
          <AiFillLinkedin
            size={35}
            className="cursor-pointer fill-slate-100 hover:translate-y-1"
          />
        </a>
      </div>
      <Link href="#about">
        <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2">
          <IoIosArrowDown size={40} className="animate-bounce fill-slate-100" />
        </div>
      </Link>
    </section>
  );
};

export default Main;
