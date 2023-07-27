import React from "react";
import ProjectItem from "./ProjectItem";
import netflixImage from "../../public/assets/netflix.png";
import recipyImage from "../../public/assets/recipy.png";
import notesImage from "../../public/assets/notes.png";
import weatherImage from "../../public/assets/weather.png";
import deliciasImage from "../../public/assets/delicias-ruiz.png";
import Header from "../UI/Header";
import { Fade } from "react-awesome-reveal";

const ProjectList = () => {
  const projects = [
    {
      id: Math.random().toString(),
      image_url: netflixImage,
      image_alt: "Netflix 2.0 image",
      title: "Netflix Clone 2.0",
      language: "Typescript | ReactJs | Firebase | Tailwindscss",
      github_link: "https://github.com/earuiz1/netflix-clone-app/",
      demo_link: "https://earuiz1.github.io/netflix-clone-app/",
    },
    {
      id: Math.random().toString(),
      image_url: recipyImage,
      image_alt: "Recipy Ready Image",
      title: "Recipy Ready",
      language: "Typescript | ReactJs | Tailwindscss",
      github_link: "https://github.com/earuiz1/recipy-ready-app/",
      demo_link: "https://earuiz1.github.io/recipy-ready-app/",
    },
    {
      id: Math.random().toString(),
      image_url: deliciasImage,
      image_alt: "delcias app image",
      title: "Delicias Ruiz",
      language: "Javascript | ReactJS | Firebase | Tailwindcss",
      github_link: "https://github.com/earuiz1/food-order-app/",
      demo_link: "https://earuiz1.github.io/food-order-app/",
    },

    {
      id: Math.random().toString(),
      image_url: weatherImage,
      image_alt: "weather app image",
      title: "Weather App",
      language: "Javascript | ReactJs | Tailwindcss",
      github_link: "https://github.com/earuiz1/weather-app",
      demo_link: "https://earuiz1.github.io/weather-app/",
    },
    {
      id: Math.random().toString(),
      image_url: notesImage,
      image_alt: "notes app image",
      title: "Notes App",
      language: "Javascript | ReactJs | CSS",
      github_link: "https://github.com/earuiz1/notes-app-demo",
      demo_link: "https://earuiz1.github.io/notes-app-demo/",
    },
  ];

  return (
    <section id="projects">
      <Header title="Projects" />
      <Fade direction="left" triggerOnce duration={2000}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 my-20 mx-10 md:mx-20 gap-y-10 gap-x-8`}
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
