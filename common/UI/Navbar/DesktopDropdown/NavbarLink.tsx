import Link from 'next/link';
import React from 'react';
import {
  PrimaryAnchorClasses,
  PrimaryAnchorWrapperClasses,
} from '../../../Styles';

const NavbarLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <div className={PrimaryAnchorWrapperClasses}>
      <Link href={href}>
        <a className={PrimaryAnchorClasses + 'px-2'}>{children}</a>
      </Link>
    </div>
  );
};

export default NavbarLink;
