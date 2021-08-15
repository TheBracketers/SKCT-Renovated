import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Logo } from '../../icons';
import {
  PrimaryAnchorWrapperClasses,
  PrimaryAnchorClasses,
} from '../../Styles';
import NavbarHoverArea from './DesktopDropdown/NavbarHoverArea';
// dropdown menu
import Menu from './MobileDropdown/Menu';

import About from './DesktopDropdown/Dropdowns/About';
function Navbar() {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  useEffect(() => {
    setShowMobileDropdown(false);
  }, []);
  const onSearch = (e) => {};
  const onExtend = () => {
    setShowMobileDropdown((prev) => !prev);
  };

  return (
    <div className="fixed w-full shadow-lg">
      {/* *********Navbar Container********* */}
      <div className="relative p-0 m-0">
        <div className="flex justify-between items-center px-5 py-2 md:py-4 ipad-pro:px-16 ipad-pro:py-4">
          {/* *********Logo********* */}
          <div className="font-semibold lg:font-bold text-3xl cursor-pointer lg:hover:text-blue-500 transition duration-300">
            <Link href="/">
              <div className="flex ipad-pro:text-normal justify-between items-center gap-3">
                <Logo />
                SKCT
              </div>
            </Link>
          </div>
          {/* *********Navbar********* */}
          <div className="hidden ipad-pro:flex flex-col ">
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
          <div className="ipad-pro:hidden flex justify-between items-center gap-6 ">
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
      {showMobileDropdown && (
        <div className="min-h-screen overflow-y-auto z-10 ipad-pro:hidden pl-2 pt-5   shadow-md bg-white font-bold ">
          <Menu />
        </div>
      )}
    </div>
  );
}

export default Navbar;
