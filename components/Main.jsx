import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Main = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full py-10 px-3 gap-3">
        <p className="text-xl font-bold md:text-2xl lg:text-3xl">
          Hi, I'm <span className=" text-blue-500">Eliezer</span>
        </p>
        <p className="text-sm md:text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          in aliquid eius? Nam ipsum ad velit! Quos accusamus laboriosam fugit
          asperiores, amet consequuntur maxime rerum magni unde, excepturi
          ipsum! Earum.
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
