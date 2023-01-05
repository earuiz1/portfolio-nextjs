import React from "react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Main = () => {
  return (
    <React.Fragment>
      <section className="realtive flex h-screen" id="main">
        <div className="flex flex-col justify-center px-4 gap-3">
          <p className="text-xl text-slate-900 font-bold md:text-2xl lg:text-3xl">
            Hi, I'm <span className=" text-blue-500">Eliezer!</span>
          </p>
          <p className="text-sm text-slate-900 md:text-lg lg:text-xl">
            Focused, creative and enthusiastic developer who has a passion for
            building web applications and a keen interest in analytics. I am
            always curious to learn and experience new concepts & skills to
            improve my coding experience and become a better developer.
          </p>
          <div className="flex">
            <FaGithubSquare size={29} className="cursor-pointer" />
            <AiFillLinkedin size={30} className="cursor-pointer" />
          </div>
          <div className="flex gap-3">
            <Link href="#about">
              <button className="bg-[#1d3557] text-slate-100 text-sm py-3 px-2 rounded-lg shadow-slate-800 shadow-md">
                Read More
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-[#1d3557] text-slate-100 text-sm py-3 px-2 rounded-lg shadow-slate-800 shadow-md">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-2/4 text-slate-50">
          <Link href="#about">
            <IoIosArrowDown size={35} />
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
