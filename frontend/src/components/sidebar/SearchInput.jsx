import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
  return (
    <form className="flex items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Search..."
        className="input  font-lato outline-none focus:outline-none  border-2  focus:border-blue-500 font-semibold "
      />
      <button className="btn btn-circle  bg-blue-400 text-black border-none hover:bg-blue-500 duration-300">
        <IoIosSearch size={22} />
      </button>
    </form>
  );
}
