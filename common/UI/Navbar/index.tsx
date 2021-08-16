import React, { useEffect, useState, useRef } from 'react';
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
import SearchBar from './SearchBar';
import AnimateHeight from 'react-animate-height';
function Navbar() {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setShowMobileDropdown(false);
    setShowSearch(false);
    searchRef.current.focus();
  }, []);
  const onSearch = () => {
    setShowSearch((prev) => !prev);
    setShowMobileDropdown(false);
    setTimeout(() => {
      searchRef.current.focus();
    });
  };
  const onExtend = () => {
    setShowMobileDropdown((prev) => !prev);
    setShowSearch(false);
  };

  const onCloseHandler = () => {
    setTimeout(() => {
      setShowSearch(false);
    }, 50);
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      searchRef.current.blur();
    }, 100);
  };

  return (
    <div className="mb-2 overflow-auto ipad-pro:overflow-visible">
      <div className="w-full bg-white ">
        <AnimateHeight height={showSearch ? 'auto' : 0}>
          <SearchBar
            ref={searchRef}
            onClose={onCloseHandler}
            onBlur={onBlurHandler}
          />
        </AnimateHeight>
      </div>
      <div className="fixed z-40 w-full shadow-lg  bg-white ">
        {/* *********Navbar Container********* */}
        <div className="relative p-0">
          <div className="flex justify-between items-center px-5 py-3  md:py-4 ipad-pro:px-16 ipad-pro:py-4">
            {/* *********Logo********* */}
            <div className="font-semibold lg:font-bold  cursor-pointer lg:hover:text-blue-400 transition duration-300">
              <Link href="/">
                <div className="flex ipad-pro:text-normal justify-between items-center gap-3">
                  <Logo width={9} />
                  <h2 className="text-2xl">SKCT</h2>
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
                <a className="hover:underline text-blue-400 transition duration-300 cursor-pointer">
                  Apply
                </a>
              </nav>
              {/* *********Primary Navbar********* */}
              <nav className="hidden md:flex gap-8 justify-center items-center font-bold text-lg">
                <div className={PrimaryAnchorWrapperClasses + 'pl-9'}>
                  <Link href="/about">
                    <a className={PrimaryAnchorClasses + 'px-2'}>About</a>
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
              <button
                className="px-1 transform rotate-0 scale-1 transition duration-200 hover:-rotate-12 hover:scale-125"
                onClick={onSearch}>
                <FaSearch />
              </button>
              <button
                className="px-1 transform scale-1 transition duration-200 hover:scale-125  "
                onClick={onExtend}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* *********Mobile DropDown********* */}

      <div className="absolute w-full z-10">
        <AnimateHeight height={showMobileDropdown ? 'auto' : 0} duration={610}>
          <div className="mt-20 md:mt-24  ipad-pro:hidden h-screen bg-white text-black font-bold ">
            <Menu />
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
}

export default Navbar;
