import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
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
  const [secondaryStyle, setSecondaryStyle] = useState(false);

  const hamburgerIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(true);
  };

  const closeIconHandler = () => {
    console.log("Clicked");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const styleHandler = () => {
      if (window.scrollY >= 100) {
        setSecondaryStyle(true);
      } else {
        setSecondaryStyle(false);
      }
    };
    window.addEventListener("scroll", styleHandler);
  }, []);

  //Disable page scroll if modal is open, otherwise allow it.
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <React.Fragment>
      <div
        className={
          secondaryStyle
            ? "fixed bg-[#e5e7eb]/40 backdrop-blur-md w-full h-[80px] shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className=" w-full h-full flex justify-between align-center px-4">
          <div className="flex items-center">
            <Image src={logoImg} alt="Personal Logo" width={35} height={35} />
          </div>
          <div className="flex items-center cursor-pointer md:hidden">
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
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-md z-[100] md:hidden"
            : ""
        }
      >
        <div
          className={
            isMenuOpen
              ? "fixed left-0 top-0 w-[80%] h-screen bg-[#e5e7eb] rounded-br-lg rounded-tr-lg ease-in duration-700"
              : "fixed left-[-100%] top-0 ease-in duration-700"
          }
        >
          <div className="flex justify-between items-center mx-4 py-4 border-b  border-slate-800/20">
            <Image src={logoImg} alt="Personal Logo" width={35} height={35} />
            <div className="bg-[#1d3557] cursor-pointer rounded-full p-2 shadow-md shadow-slate-500 hover:-translate-y-0.5 hover:bg-slate-800/80">
              <IoCloseSharp
                size={26}
                onClick={closeIconHandler}
                className="text-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col items-center my-20 gap-10">
            <Link href="#main">
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1d3557] rounded-lg shadow-md shadow-slate-500 hover:-translate-y-1 hover:bg-slate-800/80 "
              >
                <IoIosHome size={24} className="text-slate-100" />
                <span className="text-sm font-semibol text-slate-100">
                  Home
                </span>
              </div>
            </Link>
            <Link href="#about">
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1d3557] rounded-lg shadow-md shadow-slate-500 hover:-translate-y-1 hover:bg-slate-800/80"
              >
                <BsPersonFill size={24} className="text-slate-100" />
                <span className="text-sm font-semibol text-slate-100">
                  About
                </span>
              </div>
            </Link>
            <Link href="#skills">
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1d3557] rounded-lg shadow-md shadow-slate-500 hover:-translate-y-1 hover:bg-slate-800/80"
              >
                <MdComputer size={24} className="text-slate-100" />
                <span className="text-sm font-semibol text-slate-100">
                  Skills
                </span>
              </div>
            </Link>
            <Link href="#projects">
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1d3557] rounded-lg shadow-md shadow-slate-500 hover:-translate-y-1 hover:bg-slate-800/80"
              >
                <AiFillFolderOpen size={24} className="text-slate-100" />
                <span className="text-sm font-semibol text-slate-100">
                  Projects
                </span>
              </div>
            </Link>
            <Link href="#contact">
              <div
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 p-3 bg-[#1d3557] rounded-lg shadow-md shadow-slate-500 hover:-translate-y-1 hover:bg-slate-800/80"
              >
                <MdPhone size={24} className="text-slate-100" />
                <span className="text-sm font-semibol text-slate-100">
                  Contact
                </span>
              </div>
            </Link>
            <div className="flex flex-col items-center mt-10 gap-6">
              <span className="text-2xl font-semibold text-blue-400">
                Let's Connect
              </span>
              <div className="flex gap-4">
                <div className="bg-[#1d3557] cursor-pointer rounded-full p-3 shadow-md shadow-slate-500 hover:-translate-y-0.5 hover:bg-slate-800/80">
                  <FaGithubSquare size={26} className="text-slate-100" />
                </div>
                <div className="bg-[#1d3557] cursor-pointer rounded-full p-3 shadow-md shadow-slate-500 hover:-translate-y-0.5 hover:bg-slate-800/80">
                  <AiFillLinkedin size={26} className="text-slate-100" />
                </div>
                <div className="bg-[#1d3557] cursor-pointer rounded-full p-3 shadow-md shadow-slate-500 hover:-translate-y-0.5 hover:bg-slate-800/80">
                  <IoIosPaper size={26} className="text-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
