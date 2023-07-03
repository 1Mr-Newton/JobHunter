import { NavLink } from "react-router-dom";
import { DATA } from "../constants/data";
import JobAccord from "./jobaccord";
import { IoIosArrowDown } from "react-icons/io";
export default function Jobs() {
  return (
    <div className=" bg-blue- p-20 px-">
      <div className="flex gap-20 bg-red-2">
        <div className="w-[15%] ">
          {DATA.map((item, index) => (
            <JobAccord somedata={item} key={index} />
          ))}
        </div>
        {/* right job details with cards */}
        <div className="w-full">
          {/* filter and title div */}
          <div className="flex justify-between items-center">
            {/* title and total */}
            <div>
              <h2>All Jobs</h2>
              <h2>Showing 73 results</h2>
            </div>
            {/* filter */}
            <div className="flex justify-between items-center">
              <p>Sort by:</p>
              <div className="flex justify-between items-center ml-3">
                <p>Most relevant</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          {/* end of filter and title div */}
          {/* cards div */}
          <div className="w-full">
            <div className="p-5 border-faint_text overflow-hidden border-[1px]  rounded-sm flex justify-between items-center w-full h-[10rem] ">
              <div className="flex gap-5">
                <div className="w-16 h-16 bg-gray-700">Logo</div>
                <div>
                  <div>Social Media Assistant</div>
                  <div>
                    <p>Nomad Paris, France</p>
                  </div>
                  <div className="flex gap-2 mt-3 text-sm">
                    <div
                      className="text-job_type_color 
                     bg-job_type_bg px-3 py-1.5 rounded-3xl font-semibold"
                    >
                      Full-Time
                    </div>
                    <div className="w-[1px] bg-slate-200 h-8 mx-1" />
                    <div
                      className="text-service_orange border-[1px]
                     border-service_orange px-2 py-1 rounded-3xl font-semibold"
                    >
                      Marketing
                    </div>
                    <div
                      className="text-primary border-[1px]
                     border-primary px-2 py-1 rounded-3xl font-semibold"
                    >
                      Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-[14%] flex justify-between flex-col items-stretchg-red-800">
                <NavLink
                  className={
                    "w-full flex justify-center items-center p-5 bg-primary text-white"
                  }
                >
                  Apply
                </NavLink>

                <div>
                  <div className="h-1.5 w-[100%] bg-gray-200 ">
                    <div className="h-full w-[20%] bg-green-500 " />
                  </div>
                </div>
                <div>
                  <h3>2 applied of 10 capacity</h3>
                </div>
              </div>
            </div>
          </div>
          {/* end of cards div */}
        </div>
        {/* end of right job details with cards */}
      </div>

      {/* paginaton */}

      {/* <div className="flex gap-5 justify-center items-center mt-12 bottom-0 absolute right-[50%]">
        <div className="text-[1.5rem] text-faint_text">{"<"}</div>
        <div className="w-[2rem] h-[2rem] p-5 items-center  justify-center flex bg-primary rounded-md text-white">
          1
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div> */}
      {/* end of pagination */}
    </div>
  );
}
