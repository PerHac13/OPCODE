import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:p-4 overflow-hidden fixed w-full pb-4 z-50 top-0 left-0 bg-bground">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo}></img>
          </div>

          {/* Navbar links */}
          <div className="justify-end gap-12 items-center [font-size:1rem] [font-weight:400] cursor-pointer hidden md:flex">
            <NavLink
              to="/"
              className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
            >
              Projects
            </NavLink>
            <NavLink
              to="/sponsors"
              className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
            >
              Sponsors
            </NavLink>
            {/* <NavLink
              to="/about"
              className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
            >
              About Us
            </NavLink> */}
            <Button name={"Register"} />
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00FFD1] focus:outline-none"
            >
              {isOpen == true ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {isOpen && (
        <div className="md:hidden py-4 flex cursor-pointer justify-center items-center">
          <div className=" justify-between items-center">
            <NavLink
              to="/"
              className="block text-center text-[#00FFD1] my-2 capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="block text-center text-[#00FFD1] my-2 capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/sponsors"
              className="block text-center text-[#00FFD1] my-2 capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              Sponsors
            </NavLink>
            {/* <NavLink
              to="/about"
              className="block text-center text-[#00FFD1] my-2 capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
            </NavLink> */}
            <Button
              className={"w-[6.8rem] "}
              name={"Register"}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
