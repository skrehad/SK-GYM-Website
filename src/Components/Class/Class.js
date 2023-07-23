import React from "react";
import { Link } from "react-router-dom";
import "./Class.css";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GiStopwatch } from "react-icons/gi";

const Class = (props) => {
  const { classes, teacherName, time, img } = props.singleClass;
  return (
    <div className="card cardSection lg:card-side  shadow-2xl">
      <div>
        <img src={img} alt="Album" />
      </div>

      <div className="card-body">
        <h2 className="card-title font-bold text-white text-2xl">{classes}</h2>
        <div className="flex font-bold mt-4">
          <BsFillPersonCheckFill className="mt-1 mr-3" />
          {teacherName}
        </div>
        <div className="flex font-bold mt-4">
          <GiStopwatch className="mt-1 mr-3" />
          {time}
        </div>
        <div className="card-actions m-auto mt-12">
          <Link to="/contact">
            <button className="btn btn-primary">Join Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Class;
