import React from "react";
import Image from "next/image";
import showsImage from "../../public/assets/shows.png";
import notesImage from "../../public/assets/notes.png";
import weatherImage from "../../public/assets/weather.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlinePhoto } from "react-icons/hi2";

const ProjectItem = () => {
  const projectList = [
    {
      id: Math.random().toString(),
      image_url: weatherImage,
      image_alt: "weather app image",
      title: "Weather App",
      github_link: "https://github.com/earuiz1/weather-app",
      demo_link: "https://earuiz1.github.io/weather-app/",
    },
    {
      id: Math.random().toString(),
      image_url: notesImage,
      image_alt: "notes app image",
      title: "Notes App",
      language: "React JS",
      github_link: "https://github.com/earuiz1/notes-app-demo",
      demo_link: "https://earuiz1.github.io/notes-app-demo/",
    },
    {
      id: Math.random().toString(),
      image_url: showsImage,
      image_alt: "shows app image",
      title: "Shows App",
      github_link: "https://github.com/earuiz1/tv-show-demo",
      demo_link: "https://earuiz1.github.io/tv-show-demo/",
    },
  ];

  return (
    <React.Fragment>
      {projectList.map((project) => {
        return (
          <div className="relative bg-[#e5e7eb] flex items-center justify-center w-full border border-slate-400 shadow-slate-800 shadow-xl rounded-xl p-3 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={project.image_url}
              alt={project.alt}
            />
            <div className="hidden group-hover:flex flex-col items-center gap-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <span className="text-3xl text-slate-100 font-bold">
                {project.title}
              </span>
              <span className="text-lg text-slate-100">React JS</span>
              <div className="flex gap-2">
                <a
                  href={project.github_link}
                  target="_blank"
                  className="flex border-1 bg-[#1d3557] rounded-md py-2 px-2 gap-2"
                >
                  <FiGithub size={20} className="text-slate-100" />
                  <span className="text-slate-100 text-sm">GitHub</span>
                </a>
                <a
                  href={project.demo_link}
                  target="_blank"
                  className="flex border-1 bg-[#1d3557] rounded-md py-2 px-2 gap-2"
                >
                  <HiOutlinePhoto size={20} className="text-slate-100" />
                  <span className="text-slate-100 text-sm">Demo</span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectItem;
