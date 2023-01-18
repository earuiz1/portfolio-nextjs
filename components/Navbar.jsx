import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import logoImg from "../public/assets/logo.svg";

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
            <Image src={logoImg} width={35} height={35} />
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
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70 z-[100] md:hidden">
          <div className="fixed left-0 top-0 w-[80%] h-screen bg-[#e5e7eb] ease-in duration-300">
            <div className="flex justify-between items-center mx-4 py-4 border-b  border-slate-800/20">
              <Image src={logoImg} width={35} height={35} />
              <div className="cursor-pointer">
                <GrFormClose size={30} onClick={closeIconHandler} />
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-4">
              <ul>
                <Link href="#main">
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="py-6 text-sky-400 text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Home
                  </li>
                </Link>
                <Link href="#about">
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="py-6 text-sky-400 text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    About
                  </li>
                </Link>
                <Link href="#skills">
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="py-6 text-sky-400 text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="#projects">
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="py-6 text-sky-400 text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="#contact">
                  <li
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="py-6 text-sky-400 text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4"
                  >
                    Contact
                  </li>
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
