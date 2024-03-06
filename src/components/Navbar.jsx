import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-evenly items-center">
      <a className="hover:text-purple-600 cursor-pointer m-4">
        <Link to={`/`}>
          <h1 className="text-3xl">FullStackSolutions</h1>
        </Link>
      </a>
      <ul className="hidden md:flex justify-end m-4 ">
        <li className="p-4 hover:text-purple-600 ">
          <Link to={`/about`}>About me</Link>
        </li>
        <li className="p-4 hover:text-purple-600">
          <Link to={`https://github.com/Mateusz627`}>GitHub</Link>
        </li>
        <li className="p-4 hover:text-purple-600">
          <Link to={`/projects`}>Projects</Link>
        </li>
        <li className="p-4 hover:text-purple-600">
          <Link to={`/contactme`}> Contact me</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {""}
        {nav ? (
          <FiX size={20} className=" hover:text-purple-600 cursor-pointer" />
        ) : (
          <CgMenu
            size={20}
            className=" hover:text-purple-600 cursor-pointer "
          />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 border-r border-r-gray-900 bg-gray-800 "
            : "ease-in-out duration-700 fixed left-[-100%] top-0 h-screen "
        }
      >
        <a className="hover:text-purple-600 cursor-pointer m-4">
          <Link to={`/`}>
            <h1 className="text-3xl m-2">FullStackSolutions</h1>
          </Link>
        </a>
        <ul className=" uppercase p-4 ">
          <li className="p-4 border-b border-x-gray-600 hover:text-purple-600 cursor-pointer">
            <Link to={`/about`}>About me</Link>
          </li>
          <li className="p-4 border-b border-x-gray-600 hover:text-purple-600 cursor-pointer">
            <Link to={`https://github.com/Mateusz627`}>GitHub</Link>
          </li>
          <li className="p-4 border-b border-x-gray-600 hover:text-purple-600 cursor-pointer">
            <Link to={`/projects`}>Projects</Link>
          </li>
          <li className="p-4 hover:text-purple-600 cursor-pointer">
            <Link to={`/contactme`}> Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
