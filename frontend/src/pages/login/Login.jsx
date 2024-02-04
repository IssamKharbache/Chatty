import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-[350px]  md:w-[500px] p-10  rounded-lg shadow-md bg-gray-700   ">
        <h1 className="font-poppins text-4xl md:text-6xl text-center text-gray-300">
          Chatty{" "}
          <span className=" text-blue-500 font-poppins  text-center text-[18px] md:text-2xl">
            Login
          </span>
        </h1>{" "}
        <form className="flex flex-col ">
          <div className="flex flex-col gap-4">
            <label className="label p-2 "></label>
            <span className="text-xl  label-text font-poppins">Username</span>
            <input
              type="text"
              placeholder="Type your username here"
              className="input w-full font-lato font-semibold
              outline-none rounded-lg border-none
              border-[1px] focus:outline-none focus:outline-blue-500  h-14 pl-4"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="label p-2 "></label>
            <span className="text-xl label-text font-poppins">Password</span>
            <input
              type="password"
              placeholder="Type your password here"
              className="input w-full font-lato font-semibold
              outline-none rounded-lg border-none
              border-[1px] focus:outline-none focus:outline-blue-500 h-14 pl-4"
            />
          </div>

          <div className="pt-8">
            <button className="btn  btn-outline btn-primary font-poppins text-xl w-full duration-500 ">
              Login
            </button>
          </div>
          <div className="pt-4 font-poppins text-sm flex justify-center items-center">
            <span>Don't have an account ? </span>
            <a
              href="#"
              className="pl-2 text-sm hover:opacity-80 underline text-blue-400 duration-100 "
            >
              Sign Up{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
