import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const JobAccord = ({ somedata }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    <div className="mb-8">
      <div className="mb-2">
        <h3
          className="flex items-center justify-between font-semibold cursor-default"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {somedata.title}
          {accordionOpen ? (
            <IoIosArrowUp size={25} className=" cursor-pointer" />
          ) : (
            <IoIosArrowDown size={25} className=" cursor-pointer" />
          )}
        </h3>
      </div>
      {accordionOpen && (
        <div className="overflow-auto">
          {somedata.body.map((item, index) => (
            <label className="flex items-center mb-4 text-sm" key={index}>
              <input type="checkbox" className="accent-primary w-4 h-4 mr-2" />
              <span className="text-dark_text">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
JobAccord.propTypes = {
  somedata: PropTypes.any.isRequired,
};
export default JobAccord;
