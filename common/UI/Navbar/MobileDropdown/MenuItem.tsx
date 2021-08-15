import React, { FC, useState } from 'react';
import Link from 'next/link';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import AnimateHeight from 'react-animate-height';
const MenuItem: FC<{ href: String; name: String }> = ({ href, name }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div className=" pt-6 px-3  ">
      <div
        className="group flex pb-3 justify-between"
        onClick={() => {
          setIsTouched((prev) => !prev);
        }}
        tabIndex={0}
        onBlur={() => {
          setTimeout(() => {
            setIsTouched(false);
          }, 200);
        }}>
        <Link href={'/' + href}>
          <a className="align-middle group-hover:text-blue-500 transition duration-300">
            {name}
          </a>
        </Link>
        <div
          className={
            !isTouched
              ? 'transform transition duration-300 -rotate-0'
              : 'transform transition duration-300 rotate-180'
          }>
          <BsChevronDown />
        </div>
      </div>
      <AnimateHeight height={isTouched ? 'auto' : 0}>
        <div className="px-3">
          <p>
            I Think of we need to pass a component that contains all sublinks,
            that'll be rendendered conditionally
          </p>
          <p>
            I Think of we need to pass a component that contains all sublinks,
            that'll be rendendered conditionally
          </p>
          <p>
            I Think of we need to pass a component that contains all sublinks,
            that'll be rendendered conditionally
          </p>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default MenuItem;
