/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Link from "next/link";
import React from "react";

function MenuLinks() {
  return (
    <div className="">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="btn-ghost rounded-btn btn text-base capitalize"
        >
          Novelas
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href="/#">Fantasy Novel</Link>
          </li>
          <li>
            <Link href="/#">Complete Novel</Link>
          </li>
          <li>
            <Link href="/#">Search Novel</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="btn-ghost rounded-btn btn text-base capitalize"
        >
          Ranking
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href="/#">Top Week Novel</Link>
          </li>
          <li>
            <Link href="/#">Top Novel</Link>
          </li>
        </ul>
      </div>
      <div className="btn-ghost rounded-btn btn text-base capitalize">
        <Link href="/#">Write</Link>
      </div>
    </div>
  );
}

export default MenuLinks;
