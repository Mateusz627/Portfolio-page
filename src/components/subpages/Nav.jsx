import { useState, useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { FiX } from "react-icons/fi";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  useEffect(() => {
    let handler = () => {
      setNav(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="w-full flex justify-evenly items-center">
      <Link
        to={`/`}
        className="duration-500  hover:text-purple-600 cursor-pointer m-4"
      >
        <h1 className="text-3xl">FullStackSolutions</h1>
        <ScrollRestoration />
      </Link>

      <ul className="hidden md:flex justify-end m-4 ">
        <li className="p-4 hover:text-purple-600 duration-500 ">
          <Link to={`/about`}>
            About me
            <ScrollRestoration />
          </Link>
        </li>

        <li className="p-4 hover:text-purple-600 duration-500">
          <a href="https://github.com/Mateusz627" target="_blank">
            GitHub
          </a>
        </li>

        <li className="p-4 hover:text-purple-600 duration-500">
          <Link to={`/projects`}>
            Projects <ScrollRestoration />
          </Link>
        </li>

        <li className="p-4 hover:text-purple-600 duration-500">
          <Link to={`/contactme`}>
            Contact me <ScrollRestoration />
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <FiX
            size={20}
            className=" hover:text-purple-600 duration-500 cursor-pointer"
          />
        ) : (
          <CgMenu
            size={20}
            className=" hover:text-purple-600 duration-500 cursor-pointer "
          />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-gray-800 md:hidden"
            : "ease-in-out duration-700 fixed left-[-100%] top-0 h-screen"
        }
      >
        <Link
          to={`/`}
          onClick={handleNav}
          className="hover:text-purple-600 duration-500 cursor-pointer m-4"
        >
          <h1 className="text-2xl m-2 ">FullStackSolutions</h1>
          <ScrollRestoration />
        </Link>

        <ul className=" uppercase p-4 ">
          <li
            onClick={handleNav}
            className="p-4 border-b border-x-gray-600 hover:text-purple-600 duration-500 cursor-pointer"
          >
            <Link to={`/about`}>
              About me
              <ScrollRestoration />
            </Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 border-b border-x-gray-600 hover:text-purple-600 duration-500 cursor-pointer"
          >
            <Link to={`https://github.com/Mateusz627`}>GitHub</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 border-b border-x-gray-600 hover:text-purple-600 duration-500 cursor-pointer"
          >
            <Link to={`/projects`}>
              Projects
              <ScrollRestoration />
            </Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 hover:text-purple-600 duration-500 cursor-pointer"
          >
            <Link to={`/contactme`}>
              {" "}
              Contact me
              <ScrollRestoration />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
