import React from "react";
import "./Logo.css";
import image1 from "../img/logo1.png";
import image2 from "../img/logo2.png";
import image3 from "../img/logo3.png";
import image4 from "../img/logo4.png";
import image5 from "../img/logo5.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
    </div>
  );
};

export default Logo;
