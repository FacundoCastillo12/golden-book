/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Link from "next/link";
import React from "react";

function ProfileMenu() {
  return (
    <div className="dropdown-end dropdown ">
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Profile "
          />
        </div>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <Link href="/#" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link href="/#">Settings</Link>
        </li>
        <li>
          <Link href="/#">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileMenu;
