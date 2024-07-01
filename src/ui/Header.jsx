import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

function Header() {
  const location = useLocation().pathname;

  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-slate-300 sticky top-0">
      <div>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "150px" }}
          className="pb-4"
        />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="/homepage"
            className={`hover:text-red-600  ${
              location === "/homepage" &&
              "text-red-500 underline underline-offset-4"
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`hover:text-red-600  
              ${
                location === "/projects" &&
                "text-red-500 underline underline-offset-4"
              }`}
          >
            WORK
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={`hover:text-red-600 ${
              location === "/resume" &&
              "text-red-500 underline underline-offset-4"
            }`}
          >
            RESUME
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:text-red-600 ${
              location === "/about" &&
              "text-red-500 underline underline-offset-4"
            }`}
            onClick={handleClick}
          >
            ABOUT
          </Link>
        </li>
      </ul>

      {/* Hamburger */}

      <button
        className="md:hidden z-10 hover:text-red-400"
        onClick={handleClick}
      >
        {!show ? <FaBars /> : <CgClose />}
      </button>

      {/* MobileMenu  */}
      <ul
        className={`${
          !show
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center text-center items-center bg-slate-800 text-slate-300 md:hidden"
        }`}
        onClick={handleClick}
      >
        <li className="py-8 text-3xl">
          <Link
            to="/homepage"
            className={`hover:text-red-600  ${
              location === "/homepage" &&
              "text-red-500 underline underline-offset-4"
            }`}
            onClick={handleClick}
          >
            HOME
          </Link>
        </li>
        <li className="py-8 text-3xl">
          <Link
            to="/projects"
            className={`hover:text-red-600  
              ${
                location === "/projects" &&
                "text-red-500 underline underline-offset-4"
              }`}
            onClick={handleClick}
          >
            WORK
          </Link>
        </li>

        <li className="py-8 text-3xl">
          <Link
            to="/resume"
            className={`hover:text-red-600 ${
              location === "/resume" &&
              "text-red-500 underline underline-offset-4"
            }`}
            onClick={handleClick}
          >
            RESUME
          </Link>
        </li>
        <li className="py-8 text-3xl">
          <Link
            to="/about"
            className={`hover:text-red-600 ${
              location === "/about" &&
              "text-red-500 underline underline-offset-4"
            }`}
            onClick={handleClick}
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
