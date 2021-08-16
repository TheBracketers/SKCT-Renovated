import Link from "next/link";
import React from "react";

function SecondaryMenuItem({ href, name, className="" }) {
  return (
    <div className="group flex justify-between">
      <Link href={"/" + href}>
        <a className={"text-gray-500 font-bold text-sm p-3" + className }>{name}</a>
      </Link>
    </div>
  );
}

export default SecondaryMenuItem;
