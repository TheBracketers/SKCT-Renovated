import React, { FC } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
const MenuItem: FC<{ href: String; name: String }> = ({ href, name }) => {
  return (
    <div className="group   pt-6 px-3 flex justify-between">
      <Link href={'/' + href}>
        <a className=" align-middle group-hover:text-blue-500 transition duration-300 ">
          {name}
        </a>
      </Link>

      <div className="transform rotate-0 transition duration-300 group-hover:rotate-180">
        <BsChevronDown />
      </div>
    </div>
  );
};

export default MenuItem;
