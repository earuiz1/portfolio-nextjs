import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/myAvatar.svg";
import { useInView } from "react-intersection-observer";
import Header from "./UI/Header";

const AboutMe = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about">
      <Header title="About Me" />
      <div
        className={`flex flex-col items-center gap-5 xl:flex-row xl:justify-center mx-4 xl:py-40 lg:py-30 md:py-20 py-10 text-center xl:text-left transition-all duration-[2000ms] ${
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
            Technology from The University of Texas Rio Grande Valley and I have
            2 years of experience working as a Web Developer/ Digital Marketing
            Assistant at UTRGV.
          </p>
          <p className="text-sm md:text-lg lg:text-xl">
            My educational background and professional experience have given me
            a strong foundation in web development and digital marketing, as
            well as an understanding of the latest technologies and trends in
            the industry. I am passionate about using my skills to create
            engaging and user-friendly websites, and I'm constantly seeking new
            opportunities to learn and grow in my field. I'm a fast learner,
            hard worker, and team player who is dedicated to delivering
            high-quality results. I am excited to continue my career as a web
            developer and digital marketer, and look forward to the challenges
            and opportunities that lie ahead.
          </p>
          <p className="text-sm md:text-lg lg:text-xl">
            Some of my hobbies are: playing video games, reading stuff about the
            universe, watching/playing soccer, playing with my dogs and
            listening to music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
