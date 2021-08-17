import Link from 'next/link';
import React, { useState } from 'react';
import {
  PrimaryAnchorClasses,
  PrimaryAnchorWrapperClasses,
} from '../../../../Styles';
import DropDownColumn from '../DropDownColumn';
import DropdownItem from '../DropdownItem';
import DropdownWrapper from '../DropdownWrapper';

import NavbarHoverArea from '../NavbarHoverArea';
import NavbarLink from '../NavbarLink';

function Academics() {
  const [showHoverArea, setShowHoverArea] = useState(false);
  const toggleHoverArea = () => {
    setShowHoverArea((prev) => !prev);
  };
  return (
    <div
      onMouseEnter={toggleHoverArea}
      onMouseLeave={toggleHoverArea}
      className="group">
      <div>
        <NavbarLink href="/academics">Academics</NavbarLink>
      </div>
      <NavbarHoverArea show={showHoverArea}>
        <DropdownWrapper>
          <DropDownColumn>
            <DropdownItem href="">Vision Mission</DropdownItem>
            <DropdownItem href="">Management</DropdownItem>
            <DropdownItem href="">Governing Body members</DropdownItem>
            <DropdownItem href="">
              Approvals Ranking and Accreditation
            </DropdownItem>
            <DropdownItem href="">Eminent Visitors</DropdownItem>
            <DropdownItem href="">Media</DropdownItem>
            <DropdownItem href="">Daily</DropdownItem>
          </DropDownColumn>
          <DropDownColumn className="hover:text-red-500">
            <DropdownItem href="">
              <h1>A CONTENT</h1>
            </DropdownItem>
          </DropDownColumn>
          <DropDownColumn>
            <DropdownItem href="">
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

export { Academics };
