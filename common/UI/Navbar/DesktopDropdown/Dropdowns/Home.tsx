import React, { useState } from 'react';
import NavbarLink from '../NavbarLink';

function Home() {
  const [showHoverArea, setShowHoverArea] = useState(false);
  const toggleHoverArea = () => {
    setShowHoverArea((prev) => !prev);
  };
  return (
    <div
      onMouseEnter={toggleHoverArea}
      onMouseLeave={toggleHoverArea}
      className='group'>
      <div className=' pl-9'>
        <NavbarLink href='/'>Home</NavbarLink>
      </div>
    </div>
  );
}

export { Home };
