import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import AnimateHeight from 'react-animate-height';
import { FaBars, FaSearch } from 'react-icons/fa';
import { SKLogo, SKCTLogo } from '../../icons';
import { PrimaryAnchorWrapperClasses } from '../../Styles';

import Menu from './MobileDropdown/Menu';
import SearchBar from './SearchBar';
import {
  Academics,
  About,
  Research,
  Outcomes,
  Admission,
  CampusLife,
  Home,
} from './DesktopDropdown/Dropdowns';
import { FC } from 'react';

const Navbar: FC<{ onHideContent: (show: boolean) => void }> = ({
  onHideContent,
}) => {
  const [isMobileDropdownActive, setIsMobileDropdownActive] = useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isWindowNotScrolled, setIsWindowNotScrolled] = useState(true);
  const [iterateLogo, setIterateLogo] = useState(false);
  const searchBarInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    };
    if (isSearchBarActive) {
      searchBarInputRef.current.focus();
    } else {
      searchBarInputRef.current.blur();
    }

    const timer = setInterval(() => {
      setIterateLogo((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isSearchBarActive]);

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setIsWindowNotScrolled(false);
    } else {
      setIsWindowNotScrolled(true);
    }
  };

  const onSearch = () => {
    setIsSearchBarActive(true);
    setIsMobileDropdownActive(false);
    onHideContent(true);
  };
  const toggleMobileDropdown = () => {
    setIsMobileDropdownActive((prev) => !prev);
    onHideContent(isMobileDropdownActive);
    setIsSearchBarActive(false);
  };

  const onLostFocus = () => {
    onHideContent(true);
    setTimeout(() => {
      setIsSearchBarActive(false);
    }, 100);
  };

  return (
    <div className='mb-2 overflow-auto ipad-pro:overflow-visible '>
      <div
        className={`fixed z-20 top-0  w-full shadow-lg  bg-white transform transition-all duration-200 ${
          !isWindowNotScrolled &&
          !isSearchBarActive &&
          'ipad-pro:-translate-y-8'
        } `}>
        {/* *********Navbar Container********* */}
        {/* ********* Search Bar ********* */}
        <div className='w-full bg-white '>
          <AnimateHeight height={isSearchBarActive ? 'auto' : 0}>
            <SearchBar
              ref={searchBarInputRef}
              onClose={onLostFocus}
              onBlur={onLostFocus}
            />
          </AnimateHeight>
        </div>
        <div className='relative p-0 '>
          <div className='flex justify-between items-center ipad-pro:items-end  pr-5 pl-2 py-1  ipad-pro:px-12 ipad-pro:pb-4'>
            {/* *********Logo********* */}
            <div
              className={`font-semibold lg:font-bold  cursor-pointer lg:hover:text-blue-400 transform transition duration-300 ${
                !isWindowNotScrolled &&
                !isSearchBarActive &&
                'ipad-pro:translate-y-3'
              }`}>
              <Link href='/'>
                <div className='flex ipad-pro:text-normal justify-between items-center gap-3 ipad-pro:pt-6'>
                  <div className='flex flex-col relative'>
                    <div className='relative top-0 left-0 w-full min-h-full px-8 py-7 '>
                      <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2  '>
                        <AnimateHeight
                          height={iterateLogo ? 'auto' : 0}
                          duration={300}>
                          <SKCTLogo width={20} />
                        </AnimateHeight>
                        <AnimateHeight
                          height={!iterateLogo ? 'auto' : 0}
                          duration={300}>
                          <SKLogo width={20} />
                        </AnimateHeight>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-2xl w-full ipad-pro:hidden block'>
                      SKCT
                    </p>
                    {
                      <AnimateHeight
                        height={
                          isWindowNotScrolled || isSearchBarActive ? 'auto' : 0
                        }>
                        <p className='text-2xl w-full ipad-pro:block hidden'>
                          <span>Sri Krishna</span>
                          <br />
                          <span className='whitespace-nowrap'>
                            College of Technology
                          </span>
                        </p>
                      </AnimateHeight>
                    }
                    {
                      <AnimateHeight
                        height={
                          isWindowNotScrolled || isSearchBarActive ? 0 : 'auto'
                        }>
                        <p className='text-2xl w-full ipad-pro:block hidden'>
                          SKCT
                        </p>
                      </AnimateHeight>
                    }
                  </div>
                </div>
              </Link>
            </div>
            {/* *********Desktop Navbar********* */}
            <div className='hidden ipad-pro:flex flex-col '>
              {/* *********Secondary Navbar********* */}
              <AnimateHeight
                height={isWindowNotScrolled || isSearchBarActive ? 'auto' : 0}>
                <nav className='hidden md:flex gap-5 justify-end text-gray-500 font-bold text-xs uppercase '>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Students
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Parents
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Alumni
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Faculty
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Staff
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    |
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Events
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    News
                  </a>
                  <a className='hover:underline  transition duration-300 cursor-pointer'>
                    Blogs
                  </a>
                  <a className='hover:underline text-blue-400 transition duration-300 cursor-pointer'>
                    Apply
                  </a>
                </nav>
              </AnimateHeight>
              {/* *********Primary Navbar********* */}
              <nav className='hidden md:flex gap-3 justify-center items-center font-bold text-lg'>
                <Home />
                <About />
                <Academics />
                <Research />
                <CampusLife />
                <Outcomes />
                <Admission />
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
            {/* *********Mobile Navbar********* */}
            <div className='ipad-pro:hidden flex justify-between items-center gap-6 '>
              <button
                className='p-2 transform rotate-0 scale-1 transition duration-200 hover:-rotate-12 hover:scale-125'
                onClick={onSearch}>
                <FaSearch />
              </button>
              <button
                className='p-2 transform scale-1 transition duration-200 hover:scale-125  '
                onClick={toggleMobileDropdown}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* *********Mobile DropDown********* */}
      <div className='absolute w-full z-10 '>
        <AnimateHeight
          height={isMobileDropdownActive ? 'auto' : 0}
          duration={500}>
          <div className='mt-20 md:mt-24  ipad-pro:hidden h-screen bg-white text-black font-bold  '>
            <Menu onClickHandle={toggleMobileDropdown} />
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};

export default Navbar;
