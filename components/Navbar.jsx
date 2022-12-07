import React, { useState } from "react";
import { GiAbstract097 } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(true);
  };

  const closeIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full shadow-xl z-[100]">
      <div className="flex justify-between align-center px-3 py-4">
        <div className="flex">
          <h1>Personal Portfolio</h1>
        </div>
        <div className="cursor-pointer md:hidden">
          <GiHamburgerMenu size={25} onClick={hamburgerIconHandler} />
        </div>
        <ul className="hidden md:flex flex-row text-sky-400 text-lg font-semibold gap-3">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden">
          <div className="fixed left-0 top-0 w-[60%] h-screen bg-slate-200 md">
            <div className="flex justify-between mx-4 py-4 border-b border-gray-400">
              <h1>Personal Portfolio</h1>
              <div className="cursor-pointer">
                <GrFormClose size={30} onClick={closeIconHandler} />
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-4">
              <ul className="text-sky-400 text-lg font-semibold">
                <li className="py-6">
                  <a href="">Home</a>
                </li>
                <li className="py-6">
                  <a href="">About Me</a>
                </li>
                <li className="py-6">
                  <a href="">Skills</a>
                </li>
                <li className="py-6">
                  <a href="">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
