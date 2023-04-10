import React from "react";
import { useLoaderData } from "react-router-dom";
import Class from "../Class/Class";
import "./Classes.css";

const Classes = () => {
  const classes = useLoaderData();
  console.log(classes);
  return (
    <div>
      <div className="text-white font-bold text-center text-3xl my-6">
        Classes
      </div>

      <div className="classes">
        {classes.map((singleClass) => (
          <Class key={singleClass.id} singleClass={singleClass}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
