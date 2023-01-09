import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <section>
      <div className="bg-[#001845] w-full py-4">
        <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
          Personal Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 place-items-center py-8 gap-y-6">
        <ProjectItem />
      </div>
    </section>
  );
};

export default ProjectList;
