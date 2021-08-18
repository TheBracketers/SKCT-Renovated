import React, { Fragment } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/Navbar';
import ScrollToTopButton from './ScrollToTopButton';

function Layout({ children }) {
  return (
    <div className='absolute top-0 z-50'>
      <Navbar />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Layout;
