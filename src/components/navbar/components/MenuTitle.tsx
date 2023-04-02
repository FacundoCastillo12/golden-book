import Link from "next/link";
import React from "react";

function MenuTitle() {
  return (
    <div>
      <Link
        href="/"
        className="btn-ghost btn hidden text-xl normal-case dark:hover:text-[#FFD700] xs:flex"
      >
        Golden Book
      </Link>
      <Link href="/" className="btn-ghost btn text-xl normal-case xs:hidden ">
        GB
      </Link>
    </div>
  );
}

export default MenuTitle;
