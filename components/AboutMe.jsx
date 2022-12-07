import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/hero1.avif";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full py-10 px-3 gap-5">
        <div className="text-xl w-full font-semibold border-b-2 border-slate-300">
          <h2>About Me</h2>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="Web Developer Coding"
            width={200}
            heigth={200}
            className="rounded-full"
          />
        </div>
        <div className="text-sm">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            sunt, sed quo id eligendi at a praesentium fugiat et, rerum
            assumenda corrupti! Repellat accusantium magni asperiores sequi
            sunt, dolor natus?
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
