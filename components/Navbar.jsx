import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import logoImg from "../public/assets/logo.svg";
import { BsPersonFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { MdComputer } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  const hamburgerIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(true);
  };

  const closeIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const colorHandler = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", colorHandler);
  }, []);

  return (
    <React.Fragment>
      <div
        className={
          color
            ? "fixed bg-[#e5e7eb]/40 backdrop-blur-md w-full h-[80px] shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className=" w-full h-full flex justify-between align-center px-4">
          <div className="flex items-center">
            <Image src={logoImg} alt="Personal Logo" width={35} height={35} />
          </div>
          <div className="flex items-center cursor-pointer md:hidden text-slate-800">
            <GiHamburgerMenu size={25} onClick={hamburgerIconHandler} />
          </div>
          <ul className="hidden md:flex lg:flex md:items-center lg:items-center md:gap-3 lg:gap-3">
            <Link href="#main">
              <li className="text-[#001845] rounded-full px-3 py-2 shadow-sm shadow-slate-500 lg:text-lg md:text-base font-semibold hover:text-blue-500 hover:shadow-blue-500 hover:shadow-md">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="text-[#001845] rounded-full px-3 py-2 shadow-sm shadow-slate-500 lg:text-lg md:text-base font-semibold  hover:text-blue-500 hover:shadow-blue-500 hover:shadow-md ">
                About Me
              </li>
            </Link>
            <Link href="#skills">
              <li className="text-[#001845] rounded-full px-3 py-2 shadow-sm shadow-slate-500 lg:text-lg md:text-base font-semibold  hover:text-blue-500 hover:shadow-blue-500 hover:shadow-md">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="text-[#001845] rounded-full px-3 py-2 shadow-sm shadow-slate-500 lg:text-lg md:text-base font-semibold  hover:text-blue-500 hover:shadow-blue-500 hover:shadow-md ">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="text-[#001845] rounded-full px-3 py-2 shadow-sm shadow-slate-500 lg:text-lg md:text-base font-semibold  hover:text-blue-500 hover:shadow-blue-500 hover:shadow-md">
                Contact Me
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-md z-[100] md:hidden">
          <div className="fixed left-0 top-0 w-[80%] h-screen bg-[#e5e7eb] rounded-br-lg rounded-tr-lg ease-in duration-500">
            <div className="flex justify-between items-center mx-4 py-4 border-b  border-slate-800/20">
              <Image src={logoImg} alt="Personal Logo" width={35} height={35} />
              <div className="cursor-pointer rounded-full p-1 shadow-md shadow-slate-500">
                <GrFormClose size={30} onClick={closeIconHandler} />
              </div>
            </div>
            <div className="flex flex-col items-center my-20 gap-10">
              <Link href="#main">
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="flex gap-2 p-3 rounded-lg shadow-md shadow-slate-500"
                >
                  <IoIosHome size={26} />
                  <span className="text-lg font-semibol text-[#001845]">
                    Home
                  </span>
                </div>
              </Link>
              <Link href="#about">
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="flex gap-2 p-3 rounded-lg shadow-md shadow-slate-500"
                >
                  <BsPersonFill size={26} />
                  <span className="text-lg font-semibol text-[#001845]">
                    About
                  </span>
                </div>
              </Link>
              <Link href="#skills">
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="flex gap-2 p-3 rounded-lg shadow-md shadow-slate-500"
                >
                  <MdComputer size={26} />
                  <span className="text-lg font-semibol text-[#001845]">
                    Skills
                  </span>
                </div>
              </Link>
              <Link href="#projects">
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="flex gap-2 p-3 rounded-lg shadow-md shadow-slate-500"
                >
                  <AiFillFolderOpen size={26} />
                  <span className="text-lg font-semibol text-[#001845]">
                    Projects
                  </span>
                </div>
              </Link>
              <Link href="#contact">
                <div
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="flex gap-2 p-3 rounded-lg shadow-md shadow-slate-500"
                >
                  <MdPhone size={26} />
                  <span className="text-lg font-semibol text-[#001845]">
                    Contact
                  </span>
                </div>
              </Link>
              <div className="flex flex-col items-center mt-10 gap-6">
                <span className="text-xl font-semibold text-sky-500">
                  Let's Connect
                </span>
                <div className="flex gap-4">
                  <div className="cursor-pointer rounded-full p-2 shadow-md shadow-slate-500">
                    <FaGithubSquare size={26} />
                  </div>
                  <div className="cursor-pointer rounded-full p-2 shadow-md shadow-slate-500">
                    <AiFillLinkedin size={26} />
                  </div>
                  <div className="cursor-pointer rounded-full p-2 shadow-md shadow-slate-500">
                    <IoIosPaper size={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
