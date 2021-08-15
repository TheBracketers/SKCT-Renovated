import Link from 'next/link';
import React, { FC } from 'react';
import {
  DropdownClasses,
  DropdownWrapperClasses,
} from '../../../Styles/navbar';

const DropdownItem: FC<{ href: string }> = ({ children, href }) => {
  return (
    <div className={DropdownWrapperClasses}>
      <Link href={href}>
        <a className={DropdownClasses}>{children}</a>
      </Link>
    </div>
  );
};

export default DropdownItem;
