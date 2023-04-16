import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";

const Pricing = () => {
  return (
    <div className="mb-12 mt-4">
      <h1 className="text-3xl mb-8 text-center text-white">Pricing</h1>
      <div className="text-center text-white">
        <h2 className="text-2xl mb-12">Exclusive Pricing Plan</h2>
      </div>
      <div className="pricingCard ">
        <div className="cardDiv max-w-sm bg-[#181818] m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full image" src={image1} alt="" />
          <div className="px-6 py-2">
            <div className="font-bold text-white text-center text-3xl mb-2">
              Beginners
            </div>

            <div className="text-center my-2 text-white text-3xl">$39</div>

            <div className=" text-white">
              <div className="flex text-center">
                <AiFillStar className="text-yellow-500  text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Free Hand</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">GYM Fitness</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Weight Loss</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Personal Trainer</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Cycling</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link to="/contact">
              <button className="btn text-center rounded mb-4 mt-2">
                purchase now
              </button>
            </Link>
          </div>
        </div>
        <div className="cardDiv max-w-sm bg-[#181818] m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full image" src={image2} alt="" />
          <div className="px-6 py-2">
            <div className="font-bold text-white text-center text-3xl mb-2">
              Medium
            </div>

            <div className="text-center my-2 text-white text-3xl">$69</div>

            <div className=" text-white">
              <div className="flex text-center">
                <AiFillStar className="text-yellow-500  text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Free Hand</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">GYM Fitness</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Weight Loss</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Personal Trainer</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Cycling</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link to="/contact">
              <button className="btn text-center rounded mb-4 mt-2">
                purchase now
              </button>
            </Link>
          </div>
        </div>
        <div className="cardDiv max-w-sm bg-[#181818] m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full image" src={image3} alt="" />
          <div className="px-6 py-2">
            <div className="font-bold text-white text-center text-3xl mb-2">
              Advance
            </div>

            <div className="text-center my-2 text-white text-3xl">$99</div>

            <div className=" text-white">
              <div className="flex text-center">
                <AiFillStar className="text-yellow-500  text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Free Hand</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">GYM Fitness</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Weight Loss</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Personal Trainer</p>
              </div>
              <div className="flex">
                <AiFillStar className=" text-yellow-500 text-3xl"></AiFillStar>
                <p className=" ml-2 text-xl">Cycling</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link to="/contact">
              <button className="btn text-center rounded mb-4 mt-2">
                purchase now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
