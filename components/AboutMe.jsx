import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/Hero.png";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-5 px-4 w-full">
        <div className="w-full border-b border-slate-300">
          <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
            About Me
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center lg:flex-row lg:justify-center">
          <Image
            src={heroImage}
            alt="Web Developer Coding"
            width={200}
            heigth={200}
            className="rounded-md"
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-lg lg:text-xl">
              I am a Computer Science Grad with a Masters in Information
              Technology at The University of Texas Rio Grande Valley (UTRGV). I
              enjoy building web applications and exploring new frameworks
              related to web development. My end goal is to always give my best
              in everything I do and enjoy the process.
            </p>
            <p className="text-sm md:text-lg lg:text-xl">
              I have 2 years of experience working as a Web Developer/ Digital
              Marketing Assistant at UTRGV. During this process I used tools
              such as Unbounce and Microsoft Power Bi and learned a lot about
              web development, website optimization and digital marketing &
              analytics.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
