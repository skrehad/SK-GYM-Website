import React from "react";
import "./Coaches.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { MdSms } from "react-icons/md";

const Coaches = () => {
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-3xl font-bold text-[#FF0336]">GYM TRAINERS</h1>
        <p className="text-2xl text-white mt-2">Team Of Expert Coaches</p>
      </div>
      <div className="coachesCard">
        <div class="max-w-sm bg-[#181818] m-auto rounded overflow-hidden shadow-lg">
          <img class="w-full" src={image1} alt="" />
          <div className="text-center">
            <div class="px-6 py-4">
              <div class="font-bold text-white text-3xl mb-2">Ana June</div>
              <p class="text-xl">Yoga Trainer</p>
            </div>
            <div class="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-[#181818]  m-auto rounded overflow-hidden shadow-lg">
          <img class="w-full" src={image2} alt="" />
          <div className="text-center">
            <div class="px-6 py-4">
              <div class="font-bold text-white text-3xl mb-2">Sk Rehad</div>
              <p class="text-xl">Personal Trainer</p>
            </div>
            <div class="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-[#181818]  m-auto rounded overflow-hidden shadow-lg">
          <img class="w-full" src={image3} alt="" />
          <div className="text-center">
            <div class="px-6 py-4">
              <div class="font-bold text-white text-3xl mb-2">Hasan</div>
              <p class="text-xl">Fitness Trainer</p>
            </div>
            <div class="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
