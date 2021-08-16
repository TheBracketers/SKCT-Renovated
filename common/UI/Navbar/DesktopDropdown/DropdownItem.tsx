import Link from 'next/link';
import React, { FC } from 'react';

const DropdownItem: FC<{ href: string }> = ({ children, href }) => {
  return (
    <div className="mb-6">
      <Link href={href}>
        <a className="hover:text-blue-400 transition duration-300">
          {children}
        </a>
      </Link>
    </div>
  );
};

export default DropdownItem;
