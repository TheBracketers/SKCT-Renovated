import React from 'react';

import Link from 'next/link';
import { useState } from 'react';
import NavbarHoverer from './navbar-hover';

function Navbar() {
  const [showLinkLists, setShowLinkLists] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const onSearch = (e) => {};
  const onExtend = () => {
    setShowLinkLists((prev) => !prev);
  };
  const onMouseEntered = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div className="shadow-lg p-0 m-0">
        <div className="flex justify-between items-center px-10 py-2 md:py-4 lg:px-16 lg:py-4">
          <div className="font-semibold text-3xl cursor-pointer">
            <Link href="/">SKCT</Link>
          </div>

          <div className="hidden lg:flex flex-col gap-8">
            <nav className="hidden md:flex gap-5 justify-end text-gray-500 font-bold text-xs uppercase ">
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Students
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Parents
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Alumni
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Faculty
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Staff
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                |
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Events
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                News
              </a>
              <a className="hover:underline  transition duration-300 cursor-pointer">
                Blogs
              </a>
              <a className="hover:underline text-blue-500 transition duration-300 cursor-pointer">
                Apply
              </a>
            </nav>
            <nav className="hidden md:flex gap-8 justify-center items-center font-bold text-lg">
              <Link href="/about">
                <a
                  className="hover:text-blue-500 transition duration-300"
                  onMouseOver={onMouseEntered}>
                  About
                </a>
              </Link>

              <Link href="/academics">
                <a className="hover:text-blue-500 transition duration-300">
                  Academics
                </a>
              </Link>
              <Link href="/R&D">
                <a className="hover:text-blue-500 transition duration-300">
                  Research & Work
                </a>
              </Link>
              <Link href="/campus-life">
                <a className="hover:text-blue-500 transition duration-300">
                  Campus Life
                </a>
              </Link>
              <Link href="/outcomes">
                <a className="hover:text-blue-500 transition duration-300">
                  Outcomes
                </a>
              </Link>
              <Link href="/admissions">
                <a className="hover:text-blue-500 transition duration-300">
                  Admission
                </a>
              </Link>
              <button onClick={onSearch}>ICON </button>
            </nav>
          </div>
          <div className="lg:hidden flex justify-between items-center gap-6">
            <button onClick={onSearch}>ICON </button>
            <button onClick={onExtend}>ICON </button>
          </div>
        </div>
      </div>
      {showLinkLists && (
        <div className="absolute z-10 lg:hidden">
          Toggled
          {/* Todo:  Jayvan - Create a component that lists all the links*/}
        </div>
      )}
      {isHovered && (
        <div
          className="hidden lg:block absolute z-10 bg-black text-blue-500 w-full"
          id="HoverArea"></div>
      )}
    </div>
  );
}

export default Navbar;
