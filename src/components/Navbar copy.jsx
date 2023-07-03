// import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  return (
    <nav
      className="bg-white w-10/12 text-white flex justify-between items-stretch px-5"
      id="main-nav"
    >
      <div className="flex gap-10">
        <a href="#" className="text-black font-semibold text-[1.8rem]">
          JobHunter
        </a>

        <ul className="text-black list-none flex gap-4">
          <li className="flex flex-col">
            <NavLink
              to="/"
              className="h-[100%] flex items-center text-[14px] p-[0.25rem]"
            >
              Find Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className=" h-[100%] flex items-center  text-[14px] p-[0.25rem]"
            >
              Browse Companies
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="text-black list-none flex gap-2">
        <li>
          <a
            href="#"
            className="hover:bg-orange-500  h-[100%] flex items-center p-[0.25rem]"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" h-[100%] flex items-center p-[0.25rem] hover:border-b-2 hover:border-blue-400"
          >
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
}
