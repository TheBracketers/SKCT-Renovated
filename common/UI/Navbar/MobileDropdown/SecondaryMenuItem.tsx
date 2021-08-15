import Link from 'next/link';
import React from 'react';

function SecondaryMenuItem({ href, children }) {
  return (
    <div className="group flex justify-between">
      <Link href={'/' + href}>
        <a className="text-gray-500 font-bold text-xs  p-3">{children}</a>
      </Link>
    </div>
  );
}

export default SecondaryMenuItem;
