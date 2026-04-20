import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { ModeToggle } from "./theme/ToggleMode";

function NavBar() {
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0  border-b border-default px-8                                                                                                                                                                                                                          ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Tailwind
          </span>
        </Link>
        <div>
          <Input placeholder="Search" />
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            
            </li>
          <li>
            <ModeToggle/>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
