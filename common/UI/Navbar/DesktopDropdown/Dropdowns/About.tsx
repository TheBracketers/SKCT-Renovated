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
      className="group">
      <div className=" pl-9">
        <NavbarLink href="/about">About</NavbarLink>
      </div>
      <NavbarHoverArea show={showHoverArea}>
        <DropdownWrapper>
          <DropDownColumn>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Vision Mission
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Management
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Governing Body members
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Approvals Ranking and Accreditation
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Eminent Visitors
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Media
            </DropdownItem>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              Daily
            </DropdownItem>
          </DropDownColumn>
          <DropDownColumn className="hover:text-red-500">
            <DropdownItem onMouseDown={mouseDownHandler} href="">
              <h1>A CONTENT</h1>
            </DropdownItem>
          </DropDownColumn>
          <DropDownColumn>
            <DropdownItem onMouseDown={mouseDownHandler} href="">
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
