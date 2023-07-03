import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="py-10 bg-fake_bg  text-[2rem] flex justify-center items-center flex-col ">
      <div className="">
        <h3 className=" font-arp text-[3.2rem]">
          Find your
          <span className="ml-5 font-arp text-secondary">dreamjob</span>
        </h3>
        <h5 className="text-[1.4rem] opacity-60">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </h5>
      </div>
      <div className="w-[65%] h-[8rem] px-10 py-5 bg-white shadow-lg mt-12 flex justify-between items-center">
        <div className="flex items-center mr-12">
          <FiSearch className="mt-2 text-[1.5rem]" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="outline-none border-b-[1.8px] border-b-slate-200 p-3  placeholder:text-[1.2rem] placeholder:font-light"
          />
        </div>
        <div className="w-[1.2px] bg-stroke py-5 mr-3 h-[80%]" />

        <div className="flex items-center">
          <HiOutlineLocationMarker className="mt-2 text-[1.5rem]" />
          <input
            type="text"
            placeholder="Florence, Italy"
            className="outline-none border-b-[1.8px] border-b-slate-200 p-3  placeholder:text-[1.2rem] placeholder:font-light"
          />
        </div>
        <div>
          <NavLink
            to={"/search"}
            className={"bg-primary text-white p-4 text-[1.2rem]"}
          >
            Search
          </NavLink>
        </div>
      </div>
      <h3 className="text-[1.1rem] mt-14 text-left text-faint_text">
        Popular: UI Designer, UX Researcher, Android, Admin, Machine Learning
        Engineer
      </h3>
    </div>
  );
}
