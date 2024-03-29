import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import logoImg from "../../public/assets/logo.svg";
import { BsPersonFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { MdComputer } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [secondaryStyle, setSecondaryStyle] = useState(false);

  const navLinks = [
    {
      id: "nv-1",
      href: "#main",
      name: "Home",
    },
    {
      id: "nv-2",
      href: "#about",
      name: "About Me",
    },
    {
      id: "nv-3",
      href: "#skills",
      name: "Skills",
    },
    {
      id: "nv-4",
      href: "#projects",
      name: "Projects",
    },
    {
      id: "nv-5",
      href: "#contact",
      name: "Contact",
    },
  ];

  const navMobileLinks = [
    {
      id: "nv-mobile-1",
      href: "#main",
      name: "Home",
      icon: <IoIosHome size={24} className="text-[#252A33]" />,
    },
    {
      id: "nv-mobile-2",
      href: "#about",
      name: "About Me",
      icon: <BsPersonFill size={24} className="text-[#252A33]" />,
    },
    {
      id: "nv-mobile-3",
      href: "#skills",
      name: "Skills",
      icon: <MdComputer size={24} className="text-[#252A33]" />,
    },
    {
      id: "nv-mobile-4",
      href: "#projects",
      name: "Projects",
      icon: <AiFillFolderOpen size={24} className="text-[#252A33]" />,
    },
    {
      id: "nv-mobile-5",
      href: "#contact",
      name: "Contact Me",
      icon: <MdPhone size={24} className="text-[#252A33]" />,
    },
  ];

  const contactLinks = [
    {
      id: "contact-1",
      href: "https://github.com/earuiz1",
      icon: <FaGithubSquare size={26} className="text-[#252A33]" />,
    },
    {
      id: "contact-2",
      href: "https://www.linkedin.com/in/eliezer-ruiz-torres/",
      icon: <AiFillLinkedin size={26} className="text-[#252A33]" />,
    },
    {
      id: "contact-3",
      href: "https://drive.google.com/file/d/1B2CbK3lByJfjf3jeD14Av3XPxVROWja7/view?usp=sharing",
      icon: <IoIosPaper size={26} className="text-[#252A33]" />,
    },
  ];

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
    <>
      <div
        className={
          secondaryStyle
            ? "fixed bg-slate-900 w-full h-[80px] shadow-slate-600 shadow-lg z-[100]"
            : "fixed bg-slate-900 w-full h-20 z-[100]"
        }
      >
        <div className=" w-full h-full flex justify-between align-center px-4">
          <div className="flex items-center">
            <Image
              src={logoImg}
              alt="Personal Logo"
              width={35}
              height={35}
              className="invert"
            />
          </div>
          <div className="flex items-center cursor-pointer md:hidden">
            <GiHamburgerMenu
              size={25}
              onClick={hamburgerIconHandler}
              className="fill-slate-100"
            />
          </div>
          <ul className="hidden md:flex lg:flex md:items-center lg:items-center md:gap-3 lg:gap-3">
            {navLinks.map((link) => {
              return (
                <Link href={link.href} key={link.id}>
                  <li className="text-slate-100 rounded-lg px-3 py-2 lg:text-lg md:text-base font-semibold hover:bg-slate-100  hover:text-[#252A33]">
                    {link.name}
                  </li>
                </Link>
              );
            })}
            <li className="text-[#252A33] bg-slate-100 rounded-lg px-3 py-2 lg:text-lg md:text-base font-semibold hover:bg-slate-900 hover:text-slate-100 ">
              <a
                href="https://drive.google.com/file/d/1B2CbK3lByJfjf3jeD14Av3XPxVROWja7/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-full h-screen bg-slate-100/20 backdrop-blur-md z-[100] md:hidden"
            : ""
        }
      >
        <div
          className={
            isMenuOpen
              ? "fixed left-0 top-0 w-[80%] h-screen bg-[#252A33]  rounded-br-lg rounded-tr-lg ease-in duration-700"
              : "fixed left-[-100%] top-0 ease-in duration-700"
          }
        >
          <div className="flex justify-between items-center mx-4 py-4  border-b-2  border-slate-100">
            <Image
              src={logoImg}
              alt="Personal Logo"
              width={35}
              height={35}
              className="invert"
            />
            <div className="bg-slate-100 cursor-pointer rounded-full p-2 hover:-translate-y-0.5 ">
              <IoCloseSharp
                size={26}
                onClick={closeIconHandler}
                className="text-[#252A33]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center my-20 gap-10">
            {navMobileLinks.map((link) => {
              return (
                <Link href={link.href} key={link.id}>
                  <div
                    onClick={closeIconHandler}
                    className="flex items-center gap-2 p-3 bg-slate-100 rounded-lg hover:-translate-y-1 "
                  >
                    {link.icon}
                    <span className="text-sm font-semibold text-[#252A33]">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="flex flex-col items-center mt-10 gap-6">
              <span className="text-2xl font-semibold text-blue-400">
                Let's Connect
              </span>
              <div className="flex gap-4">
                {contactLinks.map((link) => {
                  return (
                    <div
                      className="bg-slate-100 cursor-pointer rounded-full p-3 hover:-translate-y-0.5 "
                      key={link.id}
                    >
                      <a href={link.href} target="_blank">
                        {link.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
