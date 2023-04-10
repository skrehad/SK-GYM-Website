import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };

  return (
    <div className="bmiDiv text-white">
      <div className="bmiSection">
        <h2 className="pt-4 font-bold text-4xl mb-4">
          Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
        </h2>
        <p className="text-2xl">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <div className="bmiForm flex flex-col">
          <form className="flex w-full gap-6 h-[50px] mt-8 ">
            <input
              onChange={(e) => setWeight(e.target.value)}
              className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
              type="text"
              placeholder="Weight / kg"
            ></input>
            <input
              onChange={(e) => setHeight(e.target.value)}
              className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
              type="text"
              placeholder="Height / cm"
            ></input>
          </form>
          {/* output */}
          <p className="mt-5 gap-3 text-[16px] font-medium flex items-center ">
            <span className="w-1/2">
              Your BMI is: &nbsp;
              <span className="text-[#ff0336]">{bmi}</span>
            </span>
            <span className="w-1/2">
              Your weight is: &nbsp;
              <span className="text-[#ff0336]">{message}</span>
            </span>
          </p>
          <button
            onClick={calcBmi}
            style={{ transition: "all 0.3s" }}
            type="submit"
            className="bmiButton uppercase w-32 h-12 rounded my-8 bg-[#323232]  hover:bg-[#FF0336]"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMI;
