import React from 'react';
import DropDownColumn from '../DropDownColumn';
import DropdownItem from '../DropdownItem';
import DropdownWrapper from '../DropdownWrapper';

function About() {
  return (
    <DropdownWrapper>
      <DropDownColumn>
        <DropdownItem href="">Vision Mission</DropdownItem>
        <DropdownItem href="">Management</DropdownItem>
        <DropdownItem href="">Governing Body members</DropdownItem>
        <DropdownItem href="">Approvals Ranking and Accreditation</DropdownItem>
        <DropdownItem href="">Eminent Visitors</DropdownItem>
        <DropdownItem href="">Media</DropdownItem>
        <DropdownItem href="">Daily</DropdownItem>
      </DropDownColumn>

      <DropDownColumn className="hover:text-red-500">
        <DropdownItem href="">
          <img src="https://source.unsplash.com/random" className="w-full" />
        </DropdownItem>
      </DropDownColumn>

      <DropDownColumn>
        <DropdownItem href="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          exercitationem, doloremque odit vero, soluta excepturi omnis tenetur
          cupiditate porro corporis alias ab laboriosam magni aliquid cumque
          blanditiis itaque eos accusamus.
        </DropdownItem>
      </DropDownColumn>
    </DropdownWrapper>
  );
}

export default About;
