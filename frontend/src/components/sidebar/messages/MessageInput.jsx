import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
export default function MessageInput() {
  const [isEmpty, setIsEmpty] = useState(true);
  const checkInput = () => {
    const message = document.getElementById("message").value;
    if (message === "") {
      setIsEmpty(true);
    }
    setIsEmpty(false);
    console.log(isEmpty);
  };
  return (
    <div className="px-4 my-3">
      <div className="relative">
        <input
          type="text"
          id="message"
          className="border text-sm rounded-lg bl;ock w-full p-2.5 bg-gray-700 border-gray-600 text-white font-poppins  outline-none"
          placeholder="Type your message"
          onChange={checkInput}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-blue-400 hover:text-blue-600 duration-300"
        >
          <IoIosSend size={20} />
        </button>
      </div>
    </div>
  );
}
