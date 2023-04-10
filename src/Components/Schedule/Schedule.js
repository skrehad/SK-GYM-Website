import React from "react";
import Saturday from "./Day/Saturday/SaturDay";
import Sunday from "./Day/Sunday/Sunday";
import Monday from "./Day/Monday/Monday";
import Tuesday from "./Day/Tuesday/Tuesday";
import Wednesday from "./Day/Wednesday/Wednesday";
import Thursday from "./Day/Thursday/Thursday";
import Friday from "./Day/Friday/Friday";

// import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <div className="text-gray-300 font-bold text-center text-3xl my-6">
        Schedule by Day
      </div>
      <div>
        <Monday></Monday>
        <Tuesday></Tuesday>
        <Wednesday></Wednesday>
        <Thursday></Thursday>
        <Friday></Friday>
        <Saturday></Saturday>
        <Sunday></Sunday>
      </div>
    </div>
  );
};

export default Schedule;
