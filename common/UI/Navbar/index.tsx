import React, { useEffect, useState, useRef } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Logo } from '../../icons';
import {
  PrimaryAnchorWrapperClasses,
  PrimaryAnchorClasses,
} from '../../Styles';

import Menu from './MobileDropdown/Menu';

import SearchBar from './SearchBar';
import AnimateHeight from 'react-animate-height';
import {
  Academics,
  About,
  Research,
  Outcomes,
} from './DesktopDropdown/Dropdowns';
import { CampusLife } from './DesktopDropdown/Dropdowns/CampusLife';
import { Admission } from './DesktopDropdown/Dropdowns/Admission';

function Navbar() {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  let [showSecondaryNav, setShowSecondaryNav] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (showSearch) {
      searchRef.current.focus();
    } else {
      searchRef.current.blur();
    }
  }, [showSearch]);
  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowSecondaryNav(false);
    } else {
      setShowSecondaryNav(true);
    }
  };

  const onSearch = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShowSearch(true);
    setShowMobileDropdown(false);
  };
  const onExtend = () => {
    setShowMobileDropdown((prev) => !prev);
    setShowSearch(false);
  };

  const onLostFocus = () => {
    setTimeout(() => {
      setShowSearch(false);
    }, 100);
  };

  return (
    <div className='mb-2 overflow-auto ipad-pro:overflow-visible'>
      <div
        className={`fixed z-40 top-0  w-full shadow-lg  bg-white transform transition-all duration-200 ${
          !showSecondaryNav && 'ipad-pro:-translate-y-8'
        } `}>
        {/* *********Navbar Container********* */}
        <div className='w-full bg-white '>
          <AnimateHeight height={showSearch ? 'auto' : 0}>
            <SearchBar
              ref={searchRef}
              onClose={onLostFocus}
              onBlur={onLostFocus}
            />
          </AnimateHeight>
        </div>
        <div className='relative p-0 '>
          {/* *********Navbar Container********* */}
          <div className='flex justify-between items-center ipad-pro:items-end  pr-5 pl-2 py-3  md:py-4 ipad-pro:px-16 ipad-pro:py-4'>
            {/* *********Logo********* */}
            <div className='font-semibold lg:font-bold  cursor-pointer lg:hover:text-blue-400 transition duration-300'>
              <Link href='/'>
                <div className='flex ipad-pro:text-normal justify-between items-center gap-3'>
                  <Logo width={9} />
                  <div className='flex flex-col   '>
                    <p className='text-2xl w-full ipad-pro:hidden block'>
                      SKCT
                    </p>
                    {
                      <AnimateHeight height={showSecondaryNav ? 'auto' : 0}>
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
                      <AnimateHeight height={showSecondaryNav ? 0 : 'auto'}>
                        <p className='text-2xl w-full ipad-pro:block hidden'>
                          SKCT
                        </p>
                      </AnimateHeight>
                    }
                  </div>
                </div>
              </Link>
            </div>
            {/* *********Navbar********* */}
            <div className='hidden ipad-pro:flex flex-col '>
              {/* Secondary Navbar*/}
              <AnimateHeight height={showSecondaryNav ? 'auto' : 0}>
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
              <nav className='hidden md:flex gap-5 justify-center items-center font-bold text-lg'>
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
            {/* *********Responsive Navbar********* */}
            <div className='ipad-pro:hidden flex justify-between items-center gap-6 '>
              <button
                className='p-2 transform rotate-0 scale-1 transition duration-200 hover:-rotate-12 hover:scale-125'
                onClick={onSearch}>
                <FaSearch />
              </button>
              <button
                className='p-2 transform scale-1 transition duration-200 hover:scale-125  '
                onClick={onExtend}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* *********Mobile DropDown********* */}

      <div className='absolute w-full z-10'>
        <AnimateHeight height={showMobileDropdown ? 'auto' : 0} duration={610}>
          <div className='mt-20 md:mt-24  ipad-pro:hidden h-screen bg-white text-black font-bold '>
            <Menu onClickHandle={onExtend} />
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
}

export default Navbar;
