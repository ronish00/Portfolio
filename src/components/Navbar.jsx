import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import whiteMenu from "../assets/icons/whiteMenu.svg";
import close from "../assets/icons/close.svg";
import sun from "../assets/icons/sun.svg";
import useTheme from "../context/Theme.js";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { thememode, lighttheme, darktheme } = useTheme();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleTheme = () => {
    if (thememode === "light") {
      darktheme();
    } else {
      lighttheme();
    }
  };

  return (
    <header className="2xl:px-72 xl:px-56 bg-white dark:bg-[#020A13] px-4 sm:px-16 py-8">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <span className="logo text-3xl font-bold text dark:text-white">
              RK
            </span>
            <span className="logo text-xs text-[#939395]">
              Front-end
              <br />
              Developer
            </span>
          </div>
        </Link>

        <ul className="md:flex list-none gap-10 items-center hidden">
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4831D4] dark:text-[#7f6cff]"
                  : "text-[#777777]"
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4831D4] dark:text-[#7f6cff]"
                  : "text-[#777777]"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4831D4] dark:text-[#7f6cff]"
                  : "text-[#777777]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={handleTheme} className="animate-spin-slow">
            <img src={sun} alt="Theme Toggle" />
          </button>
          <div
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={handleClick}
          >
            {thememode === "dark" ? (
              <img src={whiteMenu} alt="Open menu" />
            ) : (
              <img src={menu} alt="Open menu" />
            )}
          </div>
        </div>

        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } z-10 w-[250px] bg-white fixed right-0 top-0 border border-s-[1px] h-lvh p-8 duration-500`}
        >
          <div className="cursor-pointer" onClick={handleClick}>
            <img src={close} alt="Close menu" />
          </div>
          <ul className="mt-[90px] flex flex-col items-center gap-10">
            <li className="text-[#777777]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#777777]">
              <Link to="/project">Project</Link>
            </li>
            <li className="text-[#777777]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
