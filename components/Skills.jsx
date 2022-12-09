import React from "react";
import Image from "next/Image";
import BootstrapIcon from "../public/assets/bootstrap-svgrepo-com.svg";
import CssIcon from "../public/assets/css-svgrepo-com.svg";
import JavascriptIcon from "../public/assets/js-svgrepo-com.svg";
import GithubIcon from "../public/assets/github-svgrepo-com.svg";
import ExpressIcon from "../public/assets/express-svgrepo-com.svg";
import FirebaseIcon from "../public/assets/firebase-svgrepo-com.svg";
import MySQLIcon from "../public/assets/mysql-logo-svgrepo-com.svg";
import PythonIcon from "../public/assets/python-svgrepo-com.svg";
import ReactIcon from "../public/assets/react-svgrepo-com.svg";
import MongoDbIcon from "../public/assets/mongodb-svgrepo-com.svg";
import NodeIcon from "../public/assets/node-js-svgrepo-com.svg";
import PhpIcon from "../public/assets/php-svgrepo-com.svg";
import NextjsIcon from "../public/assets/nextjs-svgrepo-com.svg";
import HtmlIcon from "../public/assets/html-svgrepo-com.svg";

const Skills = () => {
  const skillList = [
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={BootstrapIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "Bootstrap",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={CssIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "CSS",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={GithubIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "GitHub",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={JavascriptIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "Javascript",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={ExpressIcon}
          alt="Web Developer Coding"
          width={80}
          heigth={80}
        />
      ),
      name: "Express",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={HtmlIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "HTML",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={ReactIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "React",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={NodeIcon}
          alt="Web Developer Coding"
          width={80}
          heigth={80}
        />
      ),
      name: "Node.js",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={PythonIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "Python",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={PhpIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "PHP",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={NextjsIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "Next.js",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={MongoDbIcon}
          alt="Web Developer Coding"
          width={80}
          heigth={80}
        />
      ),
      name: "MongoDb",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={FirebaseIcon}
          alt="Web Developer Coding"
          width={50}
          heigth={50}
        />
      ),
      name: "Firebase",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={MySQLIcon}
          alt="Web Developer Coding"
          width={80}
          heigth={80}
        />
      ),
      name: "MySQL",
    },
  ];
  return (
    <React.Fragment>
      <div className="flex flex-col py-4 px-4 w-full gap-4">
        <div className="w-full border-b border-slate-300">
          <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillList.map((skill) => {
            return (
              <div className="flex items-center justify-evenly max-h-[80px] md:min-h-[100px] lg:min-h-[100px] border-2 border-slate-400 rounded-md py-2 shadow-lg shadow-slate-800 hover:-translate-y-1">
                <div>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
