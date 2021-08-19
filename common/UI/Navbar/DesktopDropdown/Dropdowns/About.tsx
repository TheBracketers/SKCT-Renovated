import React, { useState } from 'react';
import DropDownColumn from '../DropDownColumn';
import DropdownItem from '../DropdownItem';
import DropdownWrapper from '../DropdownWrapper';
import NavbarHoverArea from '../NavbarHoverArea';
import NavbarLink from '../NavbarLink';

function About() {
  const [showHoverArea, setShowHoverArea] = useState(false);

  const toggleHoverArea = () => {
    setShowHoverArea((prev) => !prev);
  };

  const mouseDownHandler = () => {
    setTimeout(() => {
      setShowHoverArea(false);
    }, 300);
  };

  return (
    <div
      onMouseEnter={toggleHoverArea}
      onMouseLeave={toggleHoverArea}
      className='group'>
      <div>
        <NavbarLink href='/about'>
          <a onMouseDown={mouseDownHandler}>About</a>
        </NavbarLink>
      </div>
      <NavbarHoverArea show={showHoverArea}>
        <DropdownWrapper>
          <DropDownColumn>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Vision Mission</a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Management</a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Governing Body members</a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>
                Approvals Ranking and Accreditation
              </a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Eminent Visitors</a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Media</a>
            </DropdownItem>
            <DropdownItem href=''>
              <a onMouseDown={mouseDownHandler}>Daily</a>
            </DropdownItem>
          </DropDownColumn>
          <DropDownColumn className='hover:text-red-500'>
            <DropdownItem onMouseDown={mouseDownHandler} href=''>
              <h1>A CONTENT</h1>
            </DropdownItem>
          </DropDownColumn>
          <DropDownColumn>
            <DropdownItem onMouseDown={mouseDownHandler} href=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              exercitationem, doloremque odit vero, soluta excepturi omnis
              tenetur cupiditate porro corporis alias ab laboriosam magni
              aliquid cumque blanditiis itaque eos accusamus.
            </DropdownItem>
          </DropDownColumn>
        </DropdownWrapper>
      </NavbarHoverArea>
    </div>
  );
}

export { About };
