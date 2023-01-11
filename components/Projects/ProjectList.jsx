import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <section id="projects">
      <div className="bg-[#001845] w-full py-4">
        <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
          Personal Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 mx-4 gap-y-6 gap-x-4">
        <ProjectItem />
      </div>
    </section>
  );
};

export default ProjectList;
