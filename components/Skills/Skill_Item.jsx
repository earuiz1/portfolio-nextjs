import React from "react";
import Image from "next/image";

const Skill_Item = ({ image_src, image_alt, name }) => {
  return (
    <div className="flex flex-col items-center rounded-md shadow-lg bg-[#e1e2e4] shadow-slate-900 p-6 gap-3 mx-8 hover:scale-105 ease-in duration-200">
      <Image src={image_src} alt={image_alt} width={100} height={100} />
      {/* <span className="font-medium text-base uppercase">{name}</span> */}
    </div>
  );
};

export default Skill_Item;
