import React, { FC } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const NavbarHoverArea: FC<{ show: boolean }> = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={350}
      classNames='fade-in-out'>
      <div className='absolute left-0  w-full'>
        <div className=' text-white block w-full bg-black mt-4 px-16 py-4'>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default NavbarHoverArea;
