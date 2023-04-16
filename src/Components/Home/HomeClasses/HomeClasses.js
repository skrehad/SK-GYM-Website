import React from "react";
import "./HomeClasses.css";
import image1 from "./lifting.jpg";
import image2 from "./crossing.jpg";
import image3 from "./workout.jpg";
import { Link } from "react-router-dom";

const HomeClasses = () => {
  return (
    <div>
      <div className="text-center mt-12 mx-8">
        <h2 className="mb-8 font-bold text-2xl text-[#ff3216]">
          OUR FEATURED CLASS
        </h2>
        <p className="text-white text-2xl mb-4">
          We Are Offering Best Flexible Classes
        </p>
      </div>
      <div className="cardClasses  lg:my-20 lg:mx-20">
        <div className="card relative m-auto sm:mx-4 card-compact bg-base-100 shadow-xl">
          <img className="h-[400px] rounded-2xl" src={image1} alt="Shoes" />
          <div className="card-body cardBody1 text-[#ffffff] absolute ml-4 mt-[300px]">
            <h2 className="card-title">Lifting</h2>
            <p>Sunday:10.00am-11:00am</p>
          </div>
        </div>
        <div className="card  relative m-auto sm:mx-4 card-compact  bg-base-100 shadow-xl">
          <img className="h-[400px] rounded-2xl" src={image2} alt="Shoes" />
          <div className="card-body cardBody1 text-[#ffffff] absolute ml-4 mt-[300px]">
            <h2 className="card-title">Crossing</h2>
            <p>Sunday:10.00am-11:00am</p>
          </div>
        </div>
        <div className="card  relative m-auto sm:mx-4 card-compact  bg-base-100 shadow-xl">
          <img className="h-[400px] rounded-2xl" src={image3} alt="Shoes" />
          <div className="card-body cardBody1 text-[#ffffff] absolute ml-4 mt-[300px]">
            <h2 className="card-title">Workout</h2>
            <p>Sunday:10.00am-11:00am</p>
          </div>
        </div>
      </div>
      <div className=" text-center my-6">
        <Link to="/classes">
          <button className="text-xl uppercase bg-[#ff0336] mb-4 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
            More classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeClasses;
