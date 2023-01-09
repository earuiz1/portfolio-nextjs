import React from "react";
import Image from "next/image";
import ShowsImage from "../../public/assets/shows.png";
import NotesImage from "../../public/assets/notes.png";
import WeatherImage from "../../public/assets/weather.png";
import ContactImg from "../../public/assets/contactWeb.jpeg";
import { FiGithub } from "react-icons/fi";
import { HiOutlinePhoto } from "react-icons/hi2";

const ProjectItem = () => {
  const projectList = [
    {
      id: Math.random().toString(),
      image: (
        <Image
          src={WeatherImage}
          alt="Web Developer Coding"
          className="rounded-t-md"
        />
      ),
      title: "Weather App",
      github_link: "https://github.com/earuiz1/weather-app",
      demo_link: "https://earuiz1.github.io/weather-app/",
    },
    {
      id: Math.random().toString(),
      image: (
        <Image
          src={NotesImage}
          alt="Web Developer Coding"
          className="rounded-t-md"
        />
      ),
      title: "Notes App",
      github_link: "https://github.com/earuiz1/notes-app-demo",
      demo_link: "https://earuiz1.github.io/notes-app-demo/",
    },
    {
      id: Math.random().toString(),
      image: (
        <Image
          src={ShowsImage}
          alt="Web Developer Coding"
          className="rounded-t-md"
        />
      ),
      title: "Shows App",
      github_link: "https://github.com/earuiz1/tv-show-demo",
      demo_link: "https://earuiz1.github.io/tv-show-demo/",
    },
  ];
  return (
    <React.Fragment>
      {projectList.map((project) => {
        return (
          <div
            key={project.id}
            className="flex flex-col bg-[#c9cbcf] w-[320px] rounded-md shadow-lg shadow-slate-800 border border-slate-400 hover:scale-105 ease-in duration-300"
          >
            {/* Image Container */}
            <div>{project.image}</div>
            <div className="flex items-center justify-evenly py-4">
              <span className="font-semibold">{project.title}</span>
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
        );
      })}
    </React.Fragment>
  );
};

export default ProjectItem;
