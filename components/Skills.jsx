import React from "react";
import Image from "next/image";
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
import UnbounceIcon from "../public/assets/unbounce-svgrepo-com.svg";
import JupyterIcon from "../public/assets/jupyter-svgrepo-com.svg";
import TailwindcssIcon from "../public/assets/tailwindcss-svgrepo-com.svg";

const Skills = () => {
  //   const skillList = [
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={BootstrapIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "Bootstrap",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={CssIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "CSS",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={GithubIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "GitHub",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={JavascriptIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "Javascript",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={ExpressIcon}
  //           alt="Web Developer Coding"
  //           width={80}
  //           heigth={80}
  //         />
  //       ),
  //       name: "Express",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={HtmlIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "HTML",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={ReactIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "React",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={NodeIcon}
  //           alt="Web Developer Coding"
  //           width={80}
  //           heigth={80}
  //         />
  //       ),
  //       name: "Node.js",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={PythonIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "Python",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={PhpIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "PHP",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={NextjsIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "Next.js",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={MongoDbIcon}
  //           alt="Web Developer Coding"
  //           width={80}
  //           heigth={80}
  //         />
  //       ),
  //       name: "MongoDb",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={FirebaseIcon}
  //           alt="Web Developer Coding"
  //           width={50}
  //           heigth={50}
  //         />
  //       ),
  //       name: "Firebase",
  //     },
  //     {
  //       id: Math.random().toString(),
  //       icon: (
  //         <Image
  //           src={MySQLIcon}
  //           alt="Web Developer Coding"
  //           width={80}
  //           heigth={80}
  //         />
  //       ),
  //       name: "MySQL",
  //     },
  //   ];

  const languagesList = [
    {
      id: Math.random().toString(),
      icon: <Image src={HtmlIcon} alt="Html Logo" width={50} heigth={50} />,
      name: "HTML",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={JavascriptIcon}
          alt="Javascript Logo"
          width={50}
          heigth={50}
        />
      ),
      name: "Javascript",
    },
    {
      id: Math.random().toString(),
      icon: <Image src={CssIcon} alt="CSS Logo" width={50} heigth={50} />,
      name: "CSS",
    },
    {
      id: Math.random().toString(),
      icon: <Image src={PythonIcon} alt="Python Logo" width={50} heigth={50} />,
      name: "Python",
    },
    {
      id: Math.random().toString(),
      icon: <Image src={PhpIcon} alt="PhpIcon Logo" width={50} heigth={50} />,
      name: "PHP",
    },
  ];

  const databasesList = [
    {
      id: Math.random().toString(),
      icon: <Image src={MySQLIcon} alt="MySQL Logo" width={50} heigth={50} />,
      name: "MySQL",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image src={MongoDbIcon} alt="MongoDB Logo" width={50} heigth={50} />
      ),
      name: "MongoDB",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image src={FirebaseIcon} alt="Firebase Logo" width={50} heigth={50} />
      ),
      name: "Firebase",
    },
  ];

  const libraries_frameworks_List = [
    {
      id: Math.random().toString(),
      icon: <Image src={ReactIcon} alt="React Logo" width={50} heigth={50} />,
      name: "ReactJS",
    },
    {
      id: Math.random().toString(),
      icon: <Image src={NextjsIcon} alt="NextJS Logo" width={50} heigth={50} />,
      name: "NextJS",
    },
    {
      id: Math.random().toString(),
      icon: <Image src={NodeIcon} alt="NodeJS Logo" width={50} heigth={50} />,
      name: "NodeJS",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image src={ExpressIcon} alt="Express Logo" width={50} heigth={50} />
      ),
      name: "ExpressJS",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={TailwindcssIcon}
          alt="Tailwindcss Logo"
          width={50}
          heigth={50}
        />
      ),
      name: "Tailwind",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image
          src={BootstrapIcon}
          alt="Bootstrap Logo"
          width={50}
          heigth={50}
        />
      ),
      name: "Bootstrap",
    },
  ];

  const toolsList = [
    {
      id: Math.random().toString(),
      icon: <Image src={GithubIcon} alt="Github Logo" width={50} heigth={50} />,
      name: "Github",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image src={UnbounceIcon} alt="Unbounce Logo" width={50} heigth={50} />
      ),
      name: "Unbounce",
    },
    {
      id: Math.random().toString(),
      icon: (
        <Image src={JupyterIcon} alt="Jupyter Logo" width={50} heigth={50} />
      ),
      name: "Jupyter NB",
    },
  ];
  return (
    <React.Fragment>
      <section id="skills__section">
        <div className="bg-[#001845] w-full py-4">
          <h2 className="text-slate-100 text-lg font-semibold md:text-2xl lg:text-2xl px-4">
            Skills
          </h2>
        </div>
        <div className="flex flex-col max-w-[90%] gap-10 mx-auto py-8">
          <div className="flex flex-col border-slate-400 border rounded-md shadow-slate-900 shadow-lg hover:scale-105 ease-in duration-300">
            <div className="border-b border-slate-400 py-2 px-2">Langauges</div>
            <div className="grid grid-rows-2 grid-cols-4 md:grid-rows-1 md:grid-cols-5 lg:grid-rows-1 lg:grid-cols-5 py-8">
              {languagesList.map((language) => {
                return (
                  <div
                    key={language.id}
                    className="flex flex-col items-center gap-2"
                  >
                    {language.icon}
                    {language.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col border-slate-400 border rounded-md shadow-slate-900 shadow-lg hover:scale-105 ease-in duration-300">
            <div className="border-b border-slate-400 py-2 px-2">Databases</div>
            <div className="grid grid-rows-1 grid-cols-3 py-8">
              {databasesList.map((database) => {
                return (
                  <div
                    key={database.id}
                    className="flex flex-col items-center gap-2"
                  >
                    {database.icon}
                    {database.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col border-slate-400 border rounded-md shadow-slate-900 shadow-lg hover:scale-105 ease-in duration-300">
            <div className="border-b border-slate-400 py-2 px-2">
              Libraries & Frameworks
            </div>
            <div className="grid grid-rows-2 grid-cols-4 md:grid-rows-1 md:grid-cols-5 lg:grid-rows-1 lg:grid-cols-6 py-8 gap-y-4">
              {libraries_frameworks_List.map((lib_fram) => {
                return (
                  <div
                    key={lib_fram.id}
                    className="flex flex-col items-center gap-2"
                  >
                    {lib_fram.icon}
                    {lib_fram.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col border-slate-400 border rounded-md shadow-slate-900 shadow-lg hover:scale-105 ease-in duration-300">
            <div className="border-b border-slate-400 py-2 px-2">
              Tools & Software
            </div>
            <div className="grid grid-rows-1 grid-cols-3 py-8">
              {toolsList.map((tool) => {
                return (
                  <div
                    key={tool.id}
                    className="flex flex-col items-center gap-2"
                  >
                    {tool.icon}
                    {tool.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
            {skillList.map((skill) => {
              return (
                <div
                  id={skill.id}
                  className="flex items-center justify-evenly max-h-[80px] md:min-h-[100px] lg:min-h-[100px] border-2 border-slate-400 rounded-md py-2 shadow-lg shadow-slate-800 hover:-translate-y-1"
                >
                  <div>{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div> */}
    </React.Fragment>
  );
};

export default Skills;
