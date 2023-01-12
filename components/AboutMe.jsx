import React, { useState, useRef } from "react";
import Image from "next/image";
import heroImage from "../public/assets/myAvatar.svg";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <React.Fragment>
      <section id="about">
        <div className="bg-[#001845] w-full py-4">
          <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
            About Me
          </h2>
        </div>
        <div
          className={`flex flex-col items-center gap-5 md:flex-row md:justify-center lg:flex-row lg:justify-center mx-4 my-40 transition-all duration-[2000ms] ${
            isVisible ? "opacity-100 " : "opacity-0"
          }`}
          ref={myRef}
        >
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
            <p className="text-sm md:text-lg lg:text-xl">
              Some of my hobbies are: playing video games, reading stuff about
              the universe, watching/playing soccer, playing with my dogs and
              listening to music.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
