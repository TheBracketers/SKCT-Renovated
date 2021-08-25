import React, { useState } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/Navbar';
import ScrollToTopButton from '../UI/ScrollToTopButton';

function Layout({ children }) {
  const [isMobileDropDownClosed, setIsMobileDropDownClosed] = useState(true);

  const onMobileDropDownActiveHandler = (show: boolean) => {
    setIsMobileDropDownClosed(show);
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
