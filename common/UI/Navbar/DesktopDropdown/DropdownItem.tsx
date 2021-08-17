import Link from 'next/link';
import React, { FC } from 'react';

const DropdownItem: FC<{ href: string; onMouseDown?: () => void }> = ({
  children,
  href,
  onMouseDown,
}) => {
  return (
    <div className="mb-6" onMouseDown={onMouseDown}>
      <Link href={href}>
        <a className="hover:text-blue-400 transition duration-300">
          {children}
        </a>
      </Link>
    </div>
  );
};

export default DropdownItem;
