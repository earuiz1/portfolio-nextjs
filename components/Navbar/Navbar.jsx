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

const AlternateNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    {
      id: "nv-1",
      href: "#main",
      name: "Home",
      icon: <IoIosHome size={24} className="fill-slate-100 " />,
    },
    {
      id: "nv-2",
      href: "#about",
      name: "About Me",
      icon: <BsPersonFill size={24} className="fill-slate-100 " />,
    },
    {
      id: "nv-3",
      href: "#skills",
      name: "Skills",
      icon: <MdComputer size={24} className="fill-slate-100 " />,
    },
    {
      id: "nv-4",
      href: "#projects",
      name: "Projects",
      icon: <AiFillFolderOpen size={24} className="fill-slate-100 " />,
    },
    {
      id: "nv-5",
      href: "#contact",
      name: "Contact",
      icon: <MdPhone size={24} className="fill-slate-100 " />,
    },
  ];

  const contactLinks = [
    {
      id: "contact-1",
      href: "https://github.com/earuiz1",
      icon: (
        <FaGithubSquare
          size={26}
          className="fill-slate-100 hover:transform hover:translate-x-1/2"
        />
      ),
    },
    {
      id: "contact-2",
      href: "https://www.linkedin.com/in/eliezer-ruiz-torres/",
      icon: (
        <AiFillLinkedin
          size={26}
          className="fill-slate-100 hover:transform hover:translate-x-1/2"
        />
      ),
    },
    {
      id: "contact-3",
      href: "https://drive.google.com/file/d/1B2CbK3lByJfjf3jeD14Av3XPxVROWja7/view?usp=sharing",
      icon: (
        <IoIosPaper
          size={26}
          className="fill-slate-100 hover:transform hover:translate-x-1/2"
        />
      ),
    },
  ];

  return (
    <div className="fixed bg-slate-900 w-full z-[100]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 px-4">
        <div className="flex flex-row justify-between items-center">
          <Image
            src={logoImg}
            alt="Personal Logo"
            width={35}
            height={35}
            className="invert"
          />
          {isMenuOpen ? (
            <IoCloseSharp
              onClick={menuHandler}
              size={25}
              className="fill-slate-100 cursor-pointer md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={menuHandler}
              size={25}
              className="fill-slate-100 cursor-pointer md:hidden "
            />
          )}
        </div>
        {isMenuOpen && (
          <div classaName="flex flex-row">
            <ul className="flex flex-col items-center gap-4 relative md:hidden">
              {navLinks.map((link) => {
                return (
                  <Link
                    onClick={() => menuHandler(false)}
                    href={link.href}
                    key={link.id}
                  >
                    <li className="text-slate-100 text-sm font-semibold relative">
                      {link.name}
                      <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-green-600 opacity-0 transition-opacity duration-200 ease-in-out"></span>
                    </li>
                  </Link>
                );
              })}
              <div className="absolute left-0 top-[50%] transform -translate-y-1/2 flex flex-col gap-2">
                {contactLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href={link.href} target="_blank">
                        {link.icon}
                      </a>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        )}
        <ul className="hidden md:flex md:gap-6">
          {navLinks.map((link) => {
            return (
              <Link
                onClick={() => menuHandler(false)}
                href={link.href}
                key={link.id}
              >
                <li className="flex text-slate-100 text-sm lg:text-lg md:text-base font-semibold gap-2 relative">
                  {link.icon}
                  {link.name}
                  <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-green-600 opacity-0 transition-opacity duration-200 ease-in-out"></span>
                </li>
              </Link>
            );
          })}
          <li className="flex text-slate-100 text-sm lg:text-lg md:text-base font-semibold relative gap-2">
            <IoIosPaper size={24} className="fill-slate-100 " />
            <a
              href="https://drive.google.com/file/d/1B2CbK3lByJfjf3jeD14Av3XPxVROWja7/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-green-600 opacity-0 transition-opacity duration-200 ease-in-out"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlternateNavbar;
