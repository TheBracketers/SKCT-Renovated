import React, { FC } from 'react';
import { Transition } from 'react-transition-group';

const NavbarHoverArea: FC<{ show: boolean }> = ({ show, children }) => {
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={show} mountOnEnter mountOnLeave duration={duration}>
      {(state) => (
        <div
          className="absolute left-0  w-full"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
          <div className=" text-white block w-full bg-black mt-4 px-16 py-4">
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default NavbarHoverArea;
