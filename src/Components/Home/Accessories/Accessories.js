import React from "react";
import "./Accessories.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.jpg";

const Accessories = () => {
  return (
    <div>
      <h1 className="text-center text-[#ff3216] font-bold text-3xl my-8">
        WHO WE ARE
      </h1>
      <div className=" accessories rounded-md lg:mx-8 bg-[#181818]">
        <div className="mx-6 my-10">
          <div className="text-center ">
            <h1 className="text-2xl text-white">
              Take Your Health And Body To Next Level
            </h1>
            <p className="mx-16 my-6">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
          </div>
          <div className="accessoriesItems mt-16">
            <div className="m-auto">
              <img className="w-[100px] m-auto" src={image1} alt="" />
              <p className="mt-4">PROFESSIONAL TRAINERS</p>
            </div>
            <div className="m-auto">
              <img className="w-[100px] m-auto" src={image2} alt="" />
              <p className="mt-4">MODERN EQUIPMENTS</p>
            </div>
            <div className="m-auto">
              <img className="w-[100px] m-auto" src={image3} alt="" />
              <p className="mt-4">FANCY GYM MACHINES</p>
            </div>
          </div>
          <div className=" text-center mt-12">
            <Link to="/classes">
              <button className="text-xl uppercase bg-[#ff0336] hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                <p className="flex">
                  Take a tour
                  <BsArrowRight className="mt-1 ml-2 text-2xl"></BsArrowRight>
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className="w-full h-full rounded-md" src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
