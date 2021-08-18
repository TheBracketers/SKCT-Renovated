import React, { Fragment, useState } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/Navbar';
import ScrollToTopButton from './ScrollToTopButton';

function Layout({ children }) {
  const [isMobileDropDownClosed, setIsMobileDropDownClosed] = useState(true);

  const onMobileDropDownActiveHandler = () => {
    setIsMobileDropDownClosed((prev) => !prev);
  };

  return (
    <div className='absolute w-full top-0 z-50'>
      <Navbar onHideContent={onMobileDropDownActiveHandler} />
      {isMobileDropDownClosed && (
        <div>
          <main>{children}</main>
          <ScrollToTopButton />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;
