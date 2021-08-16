import React, { FC } from 'react';
import MenuItem from './MenuItem';
import SecondaryMenuItem from './SecondaryMenuItem';

function Menu() {
  return (
    <div className="space-y divide-y px-2 ipad-pro:px-8  ">
      <MenuItem href="about">About</MenuItem>
      <MenuItem href="academics">Academics</MenuItem>
      <MenuItem href="R&D">Research & Work</MenuItem>
      <MenuItem href="campus-life">Campus Life</MenuItem>
      <MenuItem href="outcomes">Outcomes</MenuItem>
      <MenuItem href="admissions">Admission</MenuItem>
      <SecondaryMenuItem href="">Students</SecondaryMenuItem>
      <SecondaryMenuItem href="">Parents</SecondaryMenuItem>
      <SecondaryMenuItem href="">Alumni</SecondaryMenuItem>
      <SecondaryMenuItem href="">faculty</SecondaryMenuItem>
      <SecondaryMenuItem href="">Staff</SecondaryMenuItem>
    </div>
  );
}

export default Menu;
