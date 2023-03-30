import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../UI/Header";
import TerminalUI from "../UI/Terminal";
import AboutMeContent from "./AboutMeContent";

const AboutMe = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about">
      <Header title="About Me" />
      <div
        className={`flex justify-center w-full h-full xl:py-40 lg:py-30 md:py-20 py-10 transition-all duration-[2000ms] ${
          isVisible ? "opacity-100 " : "opacity-0"
        }`}
        ref={myRef}
      >
        <TerminalUI title="About">
          <AboutMeContent />
        </TerminalUI>
      </div>
    </section>
  );
};

export default AboutMe;
