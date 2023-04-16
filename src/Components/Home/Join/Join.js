import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="homeFooter">
      <div className="footerDiv my-8">
        <h1 className="text-4xl text-white m-4 font-bold">
          We Are Always Providing Best
          <br />
          Fitness Service For You
        </h1>
        <div className="mt-8 lg:ml-32">
          <Link to="/contact">
            <button className="text-xl uppercase bg-[#ff0336] mb-4 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
              Join With Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
