import React, { FC } from 'react';
import MenuItem from './MenuItem';
import SecondaryMenuItem from './SecondaryMenuItem';

const MENU_ITEMS = [
  {
    key: 1,
    name: 'About',
    href: 'about',
    subMenuItems: [
      { key: 1, name: 'Vision and Mission', href: '' },
      { key: 2, name: 'Management', href: '' },
      { key: 3, name: 'Governing Body Members', href: '' },
      { key: 4, name: 'Approvals and Accreditation', href: '' },
      { key: 5, name: 'Eminent Visitors', href: '' },
      { key: 6, name: 'Media', href: '' },
      { key: 7, name: 'Daily News Letter', href: '' },
    ],
  },
  {
    key: 2,
    name: 'Academics',
    href: 'academics',
    subMenuItems: [
      { key: 1, name: 'Department', href: '' },
      { key: 2, name: 'Academic Calender', href: '' },
      { key: 3, name: 'Professional Association', href: '' },
      { key: 4, name: 'PRIDE/Competitions', href: '' },
      { key: 5, name: 'Google Classroom', href: '' },
    ],
  },
  { key: 3, name: 'Research & Work', href: 'R&D', subMenuItems: [] },
  { key: 4, name: 'Campus Life', href: 'campus-life', subMenuItems: [] },
  { key: 5, name: 'Outcomes', href: 'outcomes', subMenuItems: [] },
  { key: 6, name: 'Admission', href: 'admissions', subMenuItems: [] },
];

const SECONDARY_MENU_ITEM = [
  { key: 1, name: 'Students', href: '' },
  { key: 2, name: 'Parents', href: '' },
  { key: 3, name: 'Alumni', href: '' },
  { key: 4, name: 'Faculty', href: '' },
  { key: 5, name: 'Staff', href: '' },
];

function Menu({ onClickHandle }) {
  return (
    <div className='space-y divide-y px-2 ipad-pro:px-8 w-full '>
      {/* looping through Menu Item array */}
      {MENU_ITEMS.map((items) => {
        return (
          <MenuItem
            key={items.key}
            href={items.href}
            name={items.name}
            onMouseDown={onClickHandle}>
            {/* looping through submenu items array */}
            {items.subMenuItems.map((sub_items) => {
              return (
                <SecondaryMenuItem
                  onMouseDown={onClickHandle}
                  key={sub_items.key}
                  href={sub_items.href}
                  name={sub_items.name}
                  className='px-0 py-3'
                />
              );
            })}
          </MenuItem>
        );
      })}

      {/* looping through the secondary menu items array */}
      {SECONDARY_MENU_ITEM.map((items) => {
        return (
          <SecondaryMenuItem
            onMouseDown={onClickHandle}
            key={items.key}
            href={items.href}
            name={items.name}></SecondaryMenuItem>
        );
      })}
    </div>
  );
}

export default Menu;
