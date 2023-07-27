import React from "react";
import Marquee from "react-fast-marquee";
import Skill_Item from "./Skill_Item";
import Header from "../UI/Header";
import BootstrapIcon from "../../public/assets/bootstrap-svgrepo-com.svg";
import CssIcon from "../../public/assets/css-svgrepo-com.svg";
import JavascriptIcon from "../../public/assets/js-svgrepo-com.svg";
import GithubIcon from "../../public/assets/github-svgrepo-com.svg";
import ExpressJsIcon from "../../public/assets/express-svgrepo-com.svg";
import FirebaseIcon from "../../public/assets/firebase-svgrepo-com.svg";
import MySQLIcon from "../../public/assets/mysql-logo-svgrepo-com.svg";
import PythonIcon from "../../public/assets/python-svgrepo-com.svg";
import ReactJsIcon from "../../public/assets/react-svgrepo-com.svg";
import MongoDbIcon from "../../public/assets/mongodb-svgrepo-com.svg";
import NodeIcon from "../../public/assets/node-js-svgrepo-com.svg";
import PhpIcon from "../../public/assets/php-svgrepo-com.svg";
import NextJsIcon from "../../public/assets/nextjs-svgrepo-com.svg";
import HtmlIcon from "../../public/assets/html-svgrepo-com.svg";
import UnbounceIcon from "../../public/assets/unbounce-svgrepo-com.svg";
import JupyterIcon from "../../public/assets/jupyter-svgrepo-com.svg";
import TailWindCssIcon from "../../public/assets/tailwindcss-svgrepo-com.svg";

const Skill_List = () => {
  const skills = [
    {
      image_src: HtmlIcon,
      image_alt: "Html Logo",
      name: "HTML",
    },
    {
      image_src: JavascriptIcon,
      image_alt: "Javascript Logo",
      name: "Javascript",
    },
    {
      image_src: CssIcon,
      image_alt: "Css Logo",
      name: "Css",
    },
    {
      image_src: PythonIcon,
      image_alt: "Python Logo",
      name: "Python",
    },
    {
      image_src: PhpIcon,
      image_alt: "Php Logo",
      name: "PHP",
    },
    {
      image_src: MySQLIcon,
      image_alt: "MySQL Logo",
      name: "MySQL",
    },
    {
      image_src: MongoDbIcon,
      image_alt: "MongoDb Logo",
      name: "MongoDb",
    },
    {
      image_src: FirebaseIcon,
      image_alt: "Firebase Logo",
      name: "Firebase",
    },
    {
      image_src: ReactJsIcon,
      image_alt: "ReactJs Logo",
      name: "ReactJs",
    },
    {
      image_src: NextJsIcon,
      image_alt: "NextJs Logo",
      name: "NextJs",
    },
    {
      image_src: NodeIcon,
      image_alt: "Node Logo",
      name: "Node",
    },
    {
      image_src: ExpressJsIcon,
      image_alt: "ExpressJs Logo",
      name: "ExpressJs",
    },
    {
      image_src: TailWindCssIcon,
      image_alt: "TailWindCss Logo",
      name: "TailWindCss",
    },
    {
      image_src: BootstrapIcon,
      image_alt: "Bootstrap Logo",

      name: "Bootstrap",
    },
    {
      image_src: GithubIcon,
      image_alt: "Github Logo",
      image_width: 50,
      image_height: 50,
      name: "Github",
    },
    {
      image_src: UnbounceIcon,
      image_alt: "Unbounce Logo",
      name: "Unbounce",
    },
    {
      image_src: JupyterIcon,
      image_alt: "Jupyter Logo",
      name: "Jupyter",
    },
  ];
  return (
    <section id="skills">
      <Header title="Skills" />
      <div className="flex w-full ">
        <Marquee
          gradient={false}
          speed={90}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="bg-[#e5e7eb] xl:py-40 lg:py-30 py-20"
        >
          {skills.map((skill, index) => {
            return (
              <Skill_Item
                key={index}
                image_src={skill.image_src}
                image_alt={skill.image_alt}
                name={skill.name}
              />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Skill_List;
