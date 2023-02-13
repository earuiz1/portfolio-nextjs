import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-[#001845] w-full py-4">
      <h2 className="text-slate-100 text-2xl font-semibold md:text-3xl lg:text-4xl px-4">
        {title}
      </h2>
    </div>
  );
};

export default Header;
