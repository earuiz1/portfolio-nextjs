import React from "react";
import Header from "../UI/Header";
import TerminalUI from "../UI/Terminal";
import AboutMeContent from "./AboutMeContent";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section id="about">
      <Header title="About Me" />
      <Fade direction="left" triggerOnce duration={2000}>
        <div
          className={`flex justify-center w-full h-full xl:py-40 lg:py-30 md:py-20 py-10 `}
        >
          <TerminalUI title="About">
            <AboutMeContent />
          </TerminalUI>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
