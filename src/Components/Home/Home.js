import React from "react";
import "./Home.css";
import HomeBlog from "./HomeBlog/HomeBlog";
import Pricing from "../Pricing/Pricing";
import BMI from "./BMI/BMI";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeFooter from "./HomeFooter/HomeFooter";
import Section from "./Section/Section";
import Testimonial from "./Testimonial/Testimonial";
import Logo from "./Logo/Logo";
import Coaches from "./Coaches/Coaches";
import Join from "./Join/Join";
import Choose from "./Choose/Choose";
import HomeClasses from "./HomeClasses/HomeClasses";
import Accessories from "./Accessories/Accessories";

const Home = () => {
  return (
    <div>
      <Section></Section>
      <Accessories></Accessories>
      <HomeClasses></HomeClasses>
      <Join></Join>
      <Choose></Choose>
      <Coaches></Coaches>
      <Testimonial></Testimonial>
      <Logo></Logo>
      <HomeCarousel></HomeCarousel>
      <BMI></BMI>
      <Pricing></Pricing>
      <HomeBlog></HomeBlog>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
