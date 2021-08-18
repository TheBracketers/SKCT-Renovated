import React, { Fragment } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/Navbar';

function Layout({ children }) {
  return (
    <div className='absolute top-0 z-50'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
