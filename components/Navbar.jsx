import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { TbLetterE } from "react-icons/tb";

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
    <React.Fragment>
      {/* <div className="bg-[#1d3557] flex justify-between align-center px-4 py-4"> */}
      <div className="absolute w-full flex justify-between align-center px-4 py-4">
        <div className="flex items-center">Logo goes here</div>
        <div className="cursor-pointer md:hidden text-slate-800">
          <GiHamburgerMenu size={25} onClick={hamburgerIconHandler} />
        </div>
        <ul className="hidden md:flex lg:flex md:items-center lg:items-center md:gap-3 lg:gap-3">
          <Link href="#main">
            <li className="text-sky-400 text-base font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 ">
              Home
            </li>
          </Link>
          <Link href="#about">
            <li className="text-sky-400 text-base font-semibold  hover:text-blue-500 hover:underline hover:underline-offset-4 ">
              About Me
            </li>
          </Link>
          <Link href="#skills">
            <li className="text-sky-400 text-base font-semibold  hover:text-blue-500 hover:underline hover:underline-offset-4 ">
              Skills
            </li>
          </Link>
          <Link href="/">
            <li className="text-sky-400 text-base font-semibold  hover:text-blue-500 hover:underline hover:underline-offset-4 ">
              Projects
            </li>
          </Link>
          <Link href="#contact">
            <li className="text-sky-400 text-base font-semibold  hover:text-blue-500 hover:underline hover:underline-offset-4 ">
              Contact Me
            </li>
          </Link>
          <li>
            <button className="bg-slate-100 text-slate-900 px-2 py-2 rounded-xl">
              Resume
            </button>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden">
          <div className="fixed left-0 top-0 w-[60%] h-screen bg-[#edf6f9] md">
            <div className="flex justify-between items-center mx-4 py-4 border-b border-gray-400">
              <h1>Personal Portfolio</h1>
              <div className="cursor-pointer">
                <GrFormClose size={30} onClick={closeIconHandler} />
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-4">
              <ul className="text-sky-400 text-lg font-semibold">
                <Link href="#main">
                  <li className="py-6">Home</li>
                </Link>
                <Link href="#about">
                  <li className="py-6">About</li>
                </Link>
                <Link href="#skills">
                  <li className="py-6">Skills</li>
                </Link>
                <Link href="#contact">
                  <li className="py-6">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
