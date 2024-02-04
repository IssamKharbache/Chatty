import React from "react";
import GenderCheckBox from "./GenderCheckBox";

export default function ResponsiveSignup() {
  return (
    <div className=" items-center justify-center min-w-96 mx-auto">
      <div className="w-[300px] md:w-[500px] p-7  rounded-lg shadow-md bg-gray-700 ">
        <h1 className="font-poppins pb-4 text-4xl md:text-6xl text-center text-gray-300">
          Chatty{" "}
          <span className=" text-blue-500 font-poppins text-center text-[18px] md:text-2xl">
            Sign Up
          </span>
        </h1>
        <form className="pt-4 ">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold "
            />

            <input
              type="text"
              placeholder="Username"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
            />

            <input
              type="type password"
              placeholder="Password"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
            />
          </div>
          <GenderCheckBox />
          <div className="pt-8 ">
            <button className="btn  btn-outline btn-primary font-poppins text-xl w-full duration-500 ">
              Sign Up
            </button>
          </div>
          <div className="pt-4 font-poppins text-sm flex justify-center items-center">
            <span>Already have an account ? </span>
            <a
              href="#"
              className="pl-2 text-sm hover:opacity-80 underline text-blue-400 duration-100 "
            >
              Login{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
