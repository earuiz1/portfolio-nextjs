import React from "react";

const Terminal = ({ children, title }) => {
  return (
    <div className="flex flex-col w-[95%] h-[500px] bg-[#252A33] shadow-slate-500 shadow-lg rounded-md p-6 gap-6">
      <div className="flex flex-row py-2">
        <div className="flex flex-row gap-2">
          <span className="rounded-full bg-red-500 p-2 self-center"></span>
          <span className="rounded-full bg-yellow-500 p-2 self-center"></span>
          <span className="rounded-full bg-green-500 p-2 self-center"></span>
        </div>
        <span className="text-[#A2A2A2] font-semibold text-lg mx-auto">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

export default Terminal;
