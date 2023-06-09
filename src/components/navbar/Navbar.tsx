import React, { useState } from "react";
import Link from "next/link";
import MenuBells from "./components/MenuBells";
import MenuDarkTheme from "./components/MenuDarkTheme";
import MenuLinks from "./components/MenuLinks";
import MenuMobile from "./components/MenuMobile";
import MenuSearch from "./components/MenuSearch";
import ProfileMenu from "./components/ProfileMenu";
import MenuLanguage from "./components/MenuLanguage";
import MenuTitle from "./components/MenuTitle";

function NavbarMenu() {
  const [isUserActive] = useState(false);
  // Quizas lo de user va en un contenxt? Aprender eso.
  return (
    <header>
      <nav className="navbar bg-base-100 text-base-content dark:bg-base-300 ">
        <div className="navbar-start">
          <MenuTitle />
        </div>
        <div className="navbar-center">
          <div className="navbar-center hidden lg:flex">
            <MenuLinks />
          </div>
        </div>
        <div className="navbar-end gap-1">
          <MenuSearch />
          <MenuDarkTheme />
          <MenuLanguage />
          <MenuBells />
          <div>
            {isUserActive ? (
              <ProfileMenu />
            ) : (
              <div>
                <Link
                  role="button"
                  className="btn-outline btn-primary btn-sm btn"
                  href="/Account/Login"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
}

export default NavbarMenu;
