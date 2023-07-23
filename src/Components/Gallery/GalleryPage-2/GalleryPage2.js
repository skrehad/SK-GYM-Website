import React from "react";
import { Link } from "react-router-dom";
import image7 from "../img/7.jpg";
import image8 from "../img/8.jpg";
import image9 from "../img/9.jpg";
import image10 from "../img/10.jpg";
import image11 from "../img/11.jpg";
import image12 from "../img/12.jpg";

const GalleryPage2 = () => {
  return (
    <div>
      <h1 className="text-white text-3xl text-center my-16 font-bold">
        Gallery
      </h1>
      <div className="imageSection grid gap-5">
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image11} alt="" />
        <img src={image12} alt="" />
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

export default GalleryPage2;
