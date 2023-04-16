import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="homeFooter">
      <div className="footerDiv">
        <h1 className="text-4xl text-white font-bold">
          Need a Fitness Trainer ?
        </h1>
        <h3 className="text-2xl mt-4 mb-8 text-white">Call: +01996064707</h3>
        <div>
          <Link to="/contact">
            <button className="text-xl bg-[#ff0336] mb-4 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
