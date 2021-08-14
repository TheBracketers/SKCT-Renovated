import React, { FC } from "react";
import Link from "next/link";
import {
    PrimaryAnchorWrapperClasses,
    PrimaryAnchorClasses,
} from "../../../Styles";

const MenuItem: FC<{ href: String; name: String }> = ({ href, name }) => {
    return (
        <div className="group   pt-6 px-3 flex justify-between">
            <Link href={"/" + href}>
                <a className=" align-middle group-hover:text-blue-500 transition duration-300 ">
                    {name}
                </a>
            </Link>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:text-blue-500  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    );
};

export default MenuItem;
