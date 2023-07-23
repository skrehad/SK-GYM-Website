import React from "react";
import "./Contact.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Contact = () => {
  const informationSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="contact">
        <div>
          <h1 className="text1 text-center pt-4 text-gray-800  text-[2rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="py-8 mx-8 contactInfo grid grid-cols-2  gap-10 items-center ">
          {/* first col */}
          <div className="p-12 rounded bg-gray-800">
            <h2 className=" text-white text-[36px] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="text-[16px] w-[95%]  font-medium my-[40px]">
              At SK GYM, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="contactSection text-center gap-y-10 ">
              <div className="flex flex-col relative">
                <h3 className=" text-white text-[2rem] font-bold mb-4">
                  Dhaka, Bangladesh
                </h3>

                <p className="text-[15px] font-medium ">
                  Mirpur Road
                  <br /> Dhaka, Bangladesh
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-4 text-white">
                  Opening Hours
                </h3>

                <div className="text-[15px] font-medium ">
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-4 text-white">
                  Information
                </h3>

                <div className="text-[15px] font-medium">
                  <p>+8801996064707</p>
                  <p>skgymweb@gmail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="text-center">
                <h3 className="text-[2rem] font-bold mb-4 text-white">
                  Follow Us On
                </h3>
                <div className="icon1 ml-16">
                  <p className="">
                    <BsFacebook></BsFacebook>
                  </p>
                  <p>
                    <BsYoutube></BsYoutube>
                  </p>
                  <p>
                    <BsInstagram></BsInstagram>
                  </p>
                  <p>
                    <BsTwitter></BsTwitter>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form
            onSubmit={informationSubmit}
            className="flex flex-col bg-gray-800 p-16 rounded"
          >
            <h3 className="text-[28px] font-bold mb-14 text-white">
              Leave Us Your Info
            </h3>
            <input
              className="w-full rounded py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
              placeholder="Full Name *"
              type="text"
              required
            ></input>
            <input
              className="w-full rounded py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
              placeholder="Email Address *"
              type="email"
              required
            ></input>
            <select className="w-full rounded py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Katate</option>
              <option>Meditation</option>
              <option>Cycling</option>
            </select>
            <textarea
              required
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid rounded border-[#e4e4e4] outline-none mb-4"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6 rounded"
            >
              submit now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
