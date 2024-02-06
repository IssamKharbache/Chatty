import React from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

export default function Signup() {
  const [inputs, SetInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signUp } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };
  const handleCheckBox = (gender) => {
    SetInputs({ ...inputs, gender });
  };
  return (
    <div className=" items-center justify-center min-w-96 mx-auto">
      <div className="w-[300px] md:w-[500px] p-7  rounded-lg shadow-md bg-gray-700 ">
        <h1 className="font-poppins pb-4 text-4xl md:text-6xl text-center text-gray-300">
          Chatty{" "}
          <span className=" text-blue-500 font-poppins text-center text-[18px] md:text-2xl">
            Sign Up
          </span>
        </h1>
        <form className="pt-4 " onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold "
              value={inputs.fullName}
              onChange={(e) =>
                SetInputs({ ...inputs, fullName: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Username"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
              value={inputs.username}
              onChange={(e) =>
                SetInputs({ ...inputs, username: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Type Password"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
              value={inputs.password}
              onChange={(e) =>
                SetInputs({ ...inputs, password: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold"
              value={inputs.confirmPassword}
              onChange={(e) =>
                SetInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* check box components for gender */}
          <GenderCheckBox onCheckBox={handleCheckBox} />
          <div className="pt-8 ">
            <button
              disabled={loading}
              className="btn  btn-outline btn-primary font-poppins text-xl w-full duration-500 "
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                " Sign Up "
              )}
            </button>
          </div>
          <div className="pt-4 font-poppins text-sm flex justify-center items-center">
            <span>Already have an account ? </span>
            <Link
              to={"/login"}
              className="pl-2 text-sm hover:opacity-80 underline text-blue-400 duration-100 "
            >
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
