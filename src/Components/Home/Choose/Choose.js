import React from "react";
import { Link } from "react-router-dom";
import TrainingIcon from "./1.png";
import EquipmentsIcon from "./2.png";
import BagIcon from "./3.png";
import BottleIcon from "./4.png";
import Faq from "react-faq-component";
import "./Choose.css";

const Choose = () => {
  const data = {
    title: "FAQ (About GYM)",
    rows: [
      {
        title: "Do I Need to Work Out Every Day",
        content:
          "No, you do not need to work out every day. In fact, in most cases, I would recommend at least 1-2 days of total rest a week. ",
      },
      {
        title: "How Can I Increase Lean Muscle Mass?",
        content:
          "Adding heavy strength training into your routine is just one way to increase lean muscle mass. But there are many ways to increase strong lean muscle tone in your body.",
      },
      {
        title: "What Training Should I Be Doing to Lose Weight?",
        content:
          "When it comes to weight loss, I like to focus on a full-scale approach. Regular cardio training is great for increasing your daily calorie burn. ",
      },
      {
        title: "How Often Should I Rest?",
        content:
          "Your rest will depend on your workout schedule. Like I said previously, I recommend 1 or 2 full days of rest in your schedule. ",
      },
      {
        title: "What’s the Best Diet for My Fitness Goals?",
        content:
          "Your diet plays a huge role in the overall success of your new routine. Regardless of your goals, it’s important to give your body the fuel and energy it needs to crush and recover from your workouts. ",
      },
    ],
  };

  return (
    <div className="">
      <div className="m-5 relative lg:m-auto text-center ">
        <p className="text-[#FF3216] text-2xl uppercase font-bold my-8">
          why choose us
        </p>

        <div className="chooseCard lg:flex lg:mx-24">
          <div>
            <h2 className=" text-2xl text-white font-bold leading-[1.2] max-w-3xl ">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            <div className="grid lg:grid-cols-2 gap-4 mt-8 max-w-3xl">
              <div className="flex m-auto items-center ">
                <img
                  className="bg-[#2b2b2b] cursor-pointer hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex m-auto items-center ">
                <img
                  className="cursor-pointer bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex m-auto items-center ">
                <img
                  className="bg-[#2b2b2b] cursor-pointer hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex m-auto items-center">
                <img
                  className="bg-[#2b2b2b] cursor-pointer hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Fresh Bottle Water
                </p>
              </div>
            </div>
            <div className="my-12 max-w-3xl">
              <Link to="/classes">
                <button className="text-xl uppercase bg-[#ff0336] mb-4 hover:bg-[#d80a33] text-white font-bold py-2 px-4 border border-[#ff0336] rounded">
                  Our Classes
                </button>
              </Link>
            </div>
          </div>
          <div className="faq lg:mx-12 mt-8">
            <Faq
              data={data}
              styles={{
                titleTextColor: "white",
                rowTitleColor: "white",
                rowContentColor: "wheat",
                transitionDuration: "0.4s",
                timingFunc: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
