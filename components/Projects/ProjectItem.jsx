import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { HiOutlinePhoto } from "react-icons/hi2";

const ProjectItem = ({
  image_url,
  image_alt,
  title,
  language,
  github_link,
  demo_link,
}) => {
  return (
    <div className="relative bg-[#e1e2e4] flex items-center justify-center w-full h-full shadow-slate-900 shadow-xl rounded-xl p-3 group hover:bg-slate-900">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={image_url}
        alt={image_alt}
      />
      <div className="hidden group-hover:flex flex-col items-center gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <span className="text-3xl text-slate-100 font-bold">{title}</span>
        <span className="text-base text-slate-100 semibold italic">
          {language}
        </span>
        <div className="flex gap-2">
          <a
            href={github_link}
            target="_blank"
            className="flex border-2 border-slate-100 bg-transperent rounded-md p-2 gap-2 cursor-pointer"
          >
            <FiGithub size={20} className="stroke-slate-100" />
            <span className="text-slate-100 font-semibold text-sm">GitHub</span>
          </a>
          <a
            href={demo_link}
            target="_blank"
            className="flex border-2 border-slate-100 bg-transperent rounded-md p-2 gap-2 cursor-pointer"
          >
            <HiOutlinePhoto size={20} className="stroke-slate-100" />
            <span className="text-slate-100 font-semibold text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
