import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../../icons/';
import {
  PrimaryAnchorWrapperClasses,
  PrimaryAnchorClasses,
} from '../../Styles';
import NavbarHoverArea from './NavbarHoverArea';

import About from './Dropdowns/About';
function Navbar() {
  const [showLinkLists, setShowLinkLists] = useState(false);

  const onSearch = (e) => {};
  const onExtend = () => {
    setShowLinkLists((prev) => !prev);
  };

  return (
    <div className="fixed w-full shadow-lg">
      {/* *********Navbar Container********* */}
      <div className="relative p-0 m-0">
        <div className="flex justify-between items-center px-5 py-2 md:py-4 lg:px-16 lg:py-4">
          {/* *********Logo********* */}
          <div className="font-semibold lg:font-bold text-3xl cursor-pointer lg:hover:text-blue-500 transition duration-300">
            <Link href="/">
              <div className="flex justify-between items-center gap-3">
                <Logo />
                SKCT
              </div>
            </Link>
          </div>
          {/* *********Navbar********* */}
          <div className="hidden lg:flex flex-col ">
            {/* Secondary Navbar*/}
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
            {/* *********Primary Navbar********* */}
            <nav className="hidden md:flex gap-8 justify-center items-center font-bold text-lg">
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/about">
                  <a className={PrimaryAnchorClasses}>About</a>
                </Link>
                <NavbarHoverArea>
                  <About />
                </NavbarHoverArea>
              </div>
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/academics">
                  <a className={PrimaryAnchorClasses}>Academics</a>
                </Link>
              </div>
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/R&D">
                  <a className={PrimaryAnchorClasses}>Research & Work</a>
                </Link>
              </div>
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/campus-life">
                  <a className={PrimaryAnchorClasses}>Campus Life</a>
                </Link>
              </div>
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/outcomes">
                  <a className={PrimaryAnchorClasses}>Outcomes</a>
                </Link>
              </div>
              <div className={PrimaryAnchorWrapperClasses}>
                <Link href="/admissions">
                  <a className={PrimaryAnchorClasses}>Admission</a>
                </Link>
              </div>
              <button
                onClick={onSearch}
                className={
                  PrimaryAnchorWrapperClasses +
                  ' transform hover:-rotate-12 transition duration-300'
                }>
                <FaSearch />
              </button>
            </nav>
          </div>
          {/* *********Responsive Navbar********* */}
          <div className="lg:hidden flex justify-between items-center gap-6 ">
            <button onClick={onSearch}>
              <FaSearch />
            </button>
            <button onClick={onExtend}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {/* *********Mobile DropDown********* */}
      {showLinkLists && (
        <div className="absolute z-10 lg:hidden bg-black text-white ">
          {/* Todo:  Jayvan - Create a component that lists all the links*/}
        </div>
      )}
    </div>
  );
}

export default Navbar;
