import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeBlog from "./HomeBlog/HomeBlog";
import Pricing from "../Pricing/Pricing";
import BMI from "./BMI/BMI";

const Home = () => {
  return (
    <div>
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

      <BMI></BMI>
      <Pricing></Pricing>
      <HomeBlog></HomeBlog>

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
    </div>
  );
};

export default Home;
