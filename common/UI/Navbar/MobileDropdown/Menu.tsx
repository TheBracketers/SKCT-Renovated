import React, { FC } from 'react';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="space-y divide-y px-2 ipad-pro:px-8  ">
      <MenuItem name="About" href="about" />
      <MenuItem name="Academics" href="academics" />
      <MenuItem name="Research & Work" href="R&D" />
      <MenuItem name="Campus Life" href="campus-life" />
      <MenuItem name="Outcomes" href="outcomes" />
      <MenuItem name="Admission" href="admissions" />
      <MenuItem name="Students" href="" />
      <MenuItem name="Parents" href="" />
      <MenuItem name="Alumni" href="" />
      <MenuItem name="faculty" href="" />
      <MenuItem name="Staff" href="" />
    </div>
  );
}

export default Menu;
