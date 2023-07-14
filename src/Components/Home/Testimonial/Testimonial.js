import React from "react";
import "./Testimonial.css";
import image from "./feedback.jpg";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-white my-12">TESTIMONIALS</h1>
      <div className="bg-[#181818] testimonialCard card lg:card-side h-[500px] mx-[150px]  shadow-xl">
        <img className="image1 w-[600px] h-[500px] " src={image} alt="" />
        <div className="card-body cardBody">
          <h2 className="card-title text-xl mx-4 mt-[70px]">
            “I've been a member of SK GYM for the past 6 months and it has been
            an amazing experience. The trainers are knowledgeable and
            supportive, the equipment is top-notch, and the community of members
            is friendly and encouraging.”
          </h2>
          <p className="mt-[20px] text-2xl mx-4 text-white">Rehad hasan</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
