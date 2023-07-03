// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

import "../App.css";

export default function Navbar() {
  return (
    // shadow-lg shadow-gray-100
    <>
      <nav className="flex bg-white z-10  top-0 w-full justify-between items-center px-52 h-[60px] sticky">
        <div className="flex gap-10  h-[100%] items-center justify-between">
          <NavLink
            to={"/"}
            className={"font-semibold text-[1.6rem] text-dark_text "}
          >
            JobHunter
          </NavLink>
          <ul className="flex gap-5 h-[100%] items-center font-medium">
            <li className="border-b-4 border-b-primary h-[90%] items-center flex mt-1">
              <NavLink
                to={"/findjobs"}
                className={"h-[100%] flex items-center"}
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to={"/browsejobs"}>Browse Companies</NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex gap-5 justify-center items-center">
          <li className="">
            <NavLink to={"/login"} className={"text-primary font-semibold"}>
              Login
            </NavLink>
          </li>
          <li className="w-[1px] bg-stroke py-5 ml-3" />
          <li>
            <NavLink
              to={"/signup"}
              className={"bg-primary text-white px-4 py-3"}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
