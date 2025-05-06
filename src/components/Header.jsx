import React from "react";
import { NavLink } from "react-router";

const navlinkClasses =
  "hover:bg-white hover:text-amber-600  p-3 rounded-md transition-all duration-300 text-white";

function Header() {
  return (
    <header className="flex items-center justify-between bg-amber-500 ">
      <ul className="flex justify-center gap-4  p-2 text-white w-screen">
        <NavLink className={navlinkClasses} to={"/home"}>
          <li>Home</li>
        </NavLink>
        <NavLink className={navlinkClasses} to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink className={navlinkClasses} to={"/contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
      <button className="">
        <NavLink to={"/login"} className={"ml-auto " + navlinkClasses}>
          Login
        </NavLink>
      </button>
    </header>
  );
}

export default Header;
