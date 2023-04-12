import React from "react";
import ProjectItem from "./ProjectItem";
import showsImage from "../../public/assets/shows.png";
import notesImage from "../../public/assets/notes.png";
import weatherImage from "../../public/assets/weather.png";
import deliciasImage from "../../public/assets/delicias-ruiz-app.png";
import Header from "../UI/Header";
import { Fade } from "react-awesome-reveal";

const ProjectList = () => {
  const projects = [
    {
      id: Math.random().toString(),
      image_url: deliciasImage,
      image_alt: "delcias app image",
      title: "Delicias Ruiz",
      language: "React JS",
      github_link: "https://github.com/earuiz1/food-order-app",
      demo_link: "https://earuiz1.github.io/food-order-app/",
    },
    {
      id: Math.random().toString(),
      image_url: weatherImage,
      image_alt: "weather app image",
      title: "Weather App",
      language: "React JS",
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
      language: "Vanilla Javascript",
      github_link: "https://github.com/earuiz1/tv-show-demo",
      demo_link: "https://earuiz1.github.io/tv-show-demo/",
    },
  ];

  return (
    <section id="projects">
      <Header title="Projects" />
      <Fade direction="left" triggerOnce duration={2000}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:py-40 lg:py-30 md:py-20 py-10 mx-4 gap-y-10 gap-x-8 `}
        >
          {projects.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                id={project.id}
                image_url={project.image_url}
                image_alt={project.image_alt}
                title={project.title}
                language={project.language}
                githhub_link={project.github_link}
                demo_link={project.demo_link}
              />
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default ProjectList;
