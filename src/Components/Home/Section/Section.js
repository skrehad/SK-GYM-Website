import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="homeSection">
      <div className="homeSectionDiv">
        <h1 className="text-white  ">MAKE YOUR BODY</h1>
        <p className=" my-4 ">FIT & PERFECT</p>

        <Link to="classes">
          <button class="bg-white hover:bg-[#FF0336] text-black font-bold py-3 px-8 rounded">
            Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
