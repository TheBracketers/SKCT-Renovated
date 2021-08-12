import React, { Fragment } from 'react';
import Footer from '../UI/footer';
import Navbar from '../UI/navbar';

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
