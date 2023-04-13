import React from "react";

const ContactInfo = ({ href, name, icon }) => {
  return (
    <div className="bg-[#D9D9D9] flex flex-col items-center justify-center h-[180px] rounded-md md:col-span-4 col-span-full gap-4 hover:-translate-y-2">
      {icon}
      <a
        href={href}
        className="font-light text-sm md:text-base decoration-2 hover:underline hover:underline-offset-8"
      >
        {name}
      </a>
    </div>
  );
};

export default ContactInfo;
