import React, { Fragment } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/Navbar/navbar';

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
