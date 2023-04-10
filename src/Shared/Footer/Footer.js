import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-design flex p-16 dark:bg-gray-900 ">
      <div className="footer1">
        <h2 className="font-bold">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </h2>
        <div className="footer-icon">
          <FaFacebookSquare className="icon" />
          <AiFillYoutube className="icon" />
          <BsTwitter className="icon" />
          <AiFillGithub className="icon" />
        </div>
        <h3>
          Privacy Policy | © 2023 SK-GYM
          <br />
          Design by RadiusTheme
        </h3>
      </div>
      <div className="footer-classes">
        <h2>Our Classes</h2>
        <p>Fitness Classes</p>
        <p>Aerobics Classes</p>
        <p>Power Yoga</p>
        <p>Learn Machines</p>
        <p>Full-body Strength</p>
      </div>
      <div className="footer-end">
        <h2>Working Hours</h2>
        <h4>Monday - Friday:</h4>
        <p>7:00am - 21:00pm</p>
        <h4>Saturday:</h4>
        <p>7:00am - 19:00pm</p>
        <h4>Sunday - Closed</h4>
      </div>
    </footer>
  );
};

export default Footer;
