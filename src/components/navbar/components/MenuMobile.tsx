import Link from "next/link";
import React from "react";
import MenuDarkTheme from "./MenuDarkTheme";

function MenuMobile() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li className="menu-title">
          <span>Novels</span>
        </li>
        <li>
          <Link href="/#">Fantasy Novel</Link>
        </li>
        <li>
          <Link href="/#">Complete Novel</Link>
        </li>
        <li>
          <Link href="/#">Search Novel</Link>
        </li>
        <li className="menu-title">
          <span>Ranking</span>
        </li>
        <li>
          <Link href="/#">Top Week Novel</Link>
        </li>
        <li>
          <Link href="/#">Top Novel</Link>
        </li>
        <li className="menu-title">
          <span>Write</span>
        </li>
        <li>
          <Link href="/#">Write</Link>
        </li>
        <li className="menu-title">
          <span>Language</span>
        </li>
        <li>
          <Link href="/#">Spanish</Link>
        </li>
        <li>
          <Link href="/#">English</Link>
        </li>

        <li className=" ">
          <MenuDarkTheme />
        </li>
        <li>
          <div className="form-control">
            <button type="button" className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
