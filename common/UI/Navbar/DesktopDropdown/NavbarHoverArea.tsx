import React, { FC } from 'react';

const NavbarHoverArea: FC = ({ children }) => {
  return (
    <div className="group-hover:block hidden absolute left-0  w-full  ">
      <div className=" text-white block w-full bg-black mt-4 px-16 py-4">
        {children}
      </div>
    </div>
  );
};

export default NavbarHoverArea;
