import React from "react";
import { Link } from "react-router-dom";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="text-orange-500 my-12 font-bold text-center text-3xl">
        About US
      </div>
      <div className="aboutSection">
        <div className="text-center my-auto mx-10">
          <p className="font-bold text-2xl text-white underline underline-offset-8">
            WHO WE ARE
          </p>
          <h2 className="font-bold my-4 text-xl">
            We Will Give You Strength and Health
          </h2>
          <p className="text-white">
            At SK GYM, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <Link to="/contact">
            <button className="btn my-5 text-white btn-outline">
              Contact Us
            </button>
          </Link>
        </div>

        <div className=" imgSize ">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="aboutSection">
        <div>
          <img src={image2} alt="" />
        </div>

        <div className="text-center my-auto mx-10">
          <p className="font-bold mt-4 text-2xl text-white underline underline-offset-8">
            Our History
          </p>
          <p className="text-white mt-4">
            Gymnasia apparatus like barbells, jumping boards, running paths,
            tennis-balls, cricket fields, and fencing areas are used for
            exercises. In safe weather, outdoor locations are the most conducive
            to health. Gyms were popular in ancient Greece. Their curricula
            included self-defense, gymnastics medica, or physical therapy to
            help the sick and injured, and for physical fitness and sports, from
            boxing to dancing to skipping rope
          </p>
          <Link to="/contact">
            <button className="btn my-5 text-white btn-outline">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="aboutSection">
        <div className="text-center my-auto mx-10">
          <p className="font-bold text-2xl text-white underline underline-offset-8">
            What are the benefits of going to gym?
          </p>

          <p className="text-white mt-4">
            Immediate Benefits. Weight Management. Reduce Your Health Risk.
            Strengthen Your Bones and Muscles. Improve Your Ability to do Daily
            Activities and Prevent Falls. Increase Your Chances of Living
            Longer. Manage Chronic Health Conditions & Disabilities.
          </p>
          <Link to="/contact">
            <button className="btn my-5 text-white btn-outline">
              Contact Us
            </button>
          </Link>
        </div>

        <div>
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
