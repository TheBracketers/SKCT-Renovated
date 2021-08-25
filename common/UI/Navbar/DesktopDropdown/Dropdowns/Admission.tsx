import React, { useState } from 'react';
// import {
//   PrimaryAnchorClasses,
//   PrimaryAnchorWrapperClasses,
// } from '../../../../Styles';
// import DropDownColumn from '../DropDownColumn';
// import DropdownItem from '../DropdownItem';
// import DropdownWrapper from '../DropdownWrapper';

// import NavbarHoverArea from '../NavbarHoverArea';
import NavbarLink from '../NavbarLink';

function Admission() {
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
        <NavbarLink href="/admissions">Admissions</NavbarLink>
      </div>
    </div>
  );
}

export { Admission };
