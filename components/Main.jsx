import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Main = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full py-10 px-4 gap-3">
        <p className="text-xl font-bold md:text-2xl lg:text-3xl">
          Hi, I'm <span className=" text-blue-500">Eliezer!</span>
        </p>
        <p className="text-sm md:text-lg lg:text-xl">
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
          <button className="bg-[#1d3557] text-slate-100 text-sm py-3 px-2 rounded-lg">
            Read More
          </button>
          <button className="bg-[#1d3557] text-slate-100 text-sm py-3 px-2 rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
