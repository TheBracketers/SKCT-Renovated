import React, { FC } from 'react';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className=" space-y-7 divide-y  ">
      <MenuItem name="About" href="about" />
      <MenuItem name="Academics" href="academics" />
      <MenuItem name="Research & Work" href="R&D" />
      <MenuItem name="Campus Life" href="campus-life" />
      <MenuItem name="Outcomes" href="outcomes" />
      <MenuItem name="Admission" href="admissions" />
    </div>
  );
}

export default Menu;
