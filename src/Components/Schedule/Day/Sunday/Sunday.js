import React from "react";

const Sunday = () => {
  return (
    <div>
      <div className="text-yellow-500 mb-4 font-bold text-center text-3xl">
        Sunday
      </div>
      <div className="my-4 marginSide">
        <div className="flex flex-col gap-3">
          <ul className=" dayCard  ">
            {/* class name */}
            <li className="py-[25px] px-[55px] ">
              <p className="text-[14px] font-medium  text-[#4d4b4b]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Cycling</p>
            </li>
            {/* time */}
            <li className="p-[25px]  ">
              <p className="text-[14px] font-medium text-[#4d4b4b]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                9:00am - 10:00am
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px]   ">
              <p className="text-[14px] font-medium text-[#4d4b4b]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">David</p>
            </li>
            <li className="py-[25px] px-[55px] ">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
          <ul className=" dayCard mb-6 ">
            {/* class name */}
            <li className="py-[25px] px-[55px] ">
              <p className="text-[14px] font-medium text-[#4d4b4b]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Running</p>
            </li>
            {/* time */}
            <li className="p-[25px]  ">
              <p className="text-[14px] font-medium text-[#4d4b4b]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                10:00am - 11:00am
              </p>
            </li>
            {/* trainer */}
            <li className="p-[25px]   ">
              <p className="text-[14px] font-medium text-[#4d4b4b]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">David lus</p>
            </li>
            <li className="py-[25px] px-[55px] ">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sunday;
