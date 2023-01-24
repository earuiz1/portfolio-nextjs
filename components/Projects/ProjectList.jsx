import React from "react";
import ProjectItem from "./ProjectItem";
import showsImage from "../../public/assets/shows.png";
import notesImage from "../../public/assets/notes.png";
import weatherImage from "../../public/assets/weather.png";
import { useInView } from "react-intersection-observer";

const ProjectList = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
  });

  const projects = [
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
    <section id="projects">
      <div className="bg-[#001845] w-full py-4">
        <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
          Personal Projects
        </h2>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 mx-4 gap-y-6 gap-x-4 transition-all duration-[2000ms] ${
          isVisible ? "opacity-100 " : "opacity-0"
        }`}
        ref={myRef}
      >
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              image_url={project.image_url}
              image_alt={project.image_alt}
              title={project.title}
              githhub_link={project.github_link}
              demo_link={project.demo_link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
