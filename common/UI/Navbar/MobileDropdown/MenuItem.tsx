import React, { FC, useState } from "react";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import AnimateHeight from "react-animate-height";

const MenuItem: FC<{ href: String; name: String }> = ({
  href,
  name,
  children,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      className=" pt-4 px-3  "
      tabIndex={0}
      onBlur={() => {
        setTimeout(() => {
          setIsTouched(false);
        }, 200);
      }}
    >
      <div
        className="group flex pb-3 justify-between"
        onClick={() => {
          setIsTouched((prev) => !prev);
        }}
      >
        <Link href={"/" + href}>
          <a className="align-middle group-hover:text-blue-400 transition duration-300">
            {name}
          </a>
        </Link>
        <div
          className={
            !isTouched
              ? "transform transition duration-300 -rotate-0"
              : "transform transition duration-300 rotate-180"
          }
        >
          {name != "Admission" && <BsChevronDown />}
        </div>
      </div>
      <AnimateHeight height={isTouched ? "auto" : 0}>
        <div >{children}</div>
      </AnimateHeight>
    </div>
  );
};

export default MenuItem;
