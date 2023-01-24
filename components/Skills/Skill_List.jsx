import React from "react";
import Marquee from "react-fast-marquee";
import Skill_Item from "./Skill_Item";
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
      id: Math.random().toString(),
      image_src: HtmlIcon,
      image_alt: "Html Logo",
      name: "HTML",
    },
    {
      id: Math.random().toString(),
      image_src: JavascriptIcon,
      image_alt: "Javascript Logo",
      name: "Javascript",
    },
    {
      id: Math.random().toString(),
      image_src: CssIcon,
      image_alt: "Css Logo",
      name: "Css",
    },
    {
      id: Math.random().toString(),
      image_src: PythonIcon,
      image_alt: "Python Logo",
      name: "Python",
    },
    {
      id: Math.random().toString(),
      image_src: PhpIcon,
      image_alt: "Php Logo",
      name: "PHP",
    },
    {
      id: Math.random().toString(),
      image_src: MySQLIcon,
      image_alt: "MySQL Logo",
      name: "MySQL",
    },
    {
      id: Math.random().toString(),
      image_src: MongoDbIcon,
      image_alt: "MongoDb Logo",
      name: "MongoDb",
    },
    {
      id: Math.random().toString(),
      image_src: FirebaseIcon,
      image_alt: "Firebase Logo",
      name: "Firebase",
    },
    {
      id: Math.random().toString(),
      image_src: ReactJsIcon,
      image_alt: "ReactJs Logo",
      name: "ReactJs",
    },
    {
      id: Math.random().toString(),
      image_src: NextJsIcon,
      image_alt: "NextJs Logo",
      name: "NextJs",
    },
    {
      id: Math.random().toString(),
      image_src: NodeIcon,
      image_alt: "Node Logo",
      name: "Node",
    },
    {
      id: Math.random().toString(),
      image_src: ExpressJsIcon,
      image_alt: "ExpressJs Logo",
      name: "ExpressJs",
    },
    {
      id: Math.random().toString(),
      image_src: TailWindCssIcon,
      image_alt: "TailWindCss Logo",
      name: "TailWindCss",
    },
    {
      id: Math.random().toString(),
      image_src: BootstrapIcon,
      image_alt: "Bootstrap Logo",

      name: "Bootstrap",
    },
    {
      id: Math.random().toString(),
      image_src: GithubIcon,
      image_alt: "Github Logo",
      image_width: 50,
      image_height: 50,
      name: "Github",
    },
    {
      id: Math.random().toString(),
      image_src: UnbounceIcon,
      image_alt: "Unbounce Logo",
      name: "Unbounce",
    },
    {
      id: Math.random().toString(),
      image_src: JupyterIcon,
      image_alt: "Jupyter Logo",
      name: "Jupyter",
    },
  ];
  return (
    <section id="skills">
      <div className="bg-[#001845] w-full py-4">
        <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
          Skills
        </h2>
      </div>
      <div className="flex w-full py-10 md:py-20 lg:py-40">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          className="py-4"
        >
          {skills.map((skill) => {
            return (
              <Skill_Item
                key={skill.id}
                id={skill.id}
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
