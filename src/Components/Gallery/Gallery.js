import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";
import image5 from "./img/5.jpg";
import image6 from "./img/6.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-white text-3xl text-center my-16 font-bold">
        Gallery
      </h1>
      <div className="imageSection grid gap-5">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>

      <div className="text-center mb-8">
        <div className="btn-group  ">
          <Link to="/gallery">
            <button className="btn mr-2 btn-outline">Previous page</button>
          </Link>
          <Link to="/galleryPage-2">
            <button className="btn btn-outline">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
