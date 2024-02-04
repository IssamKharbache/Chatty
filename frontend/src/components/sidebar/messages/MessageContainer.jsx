import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { BiSolidMessageAdd } from "react-icons/bi";
import leftarrow from "../images/leftarrow.svg";

export default function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-gray-400 px-4 py-2 mb-2">
            <span className="text-gray-900 font-poppins font-bold ">
              Hassan
            </span>
          </div>
          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="px-4  text-center sm:text-lg md:text-3xl  text-gray-200 font-ProtestRiot flex flex-col items-center gap-8">
        <img src={leftarrow} alt="" className="w-16 md:w-24" />
        <p>Welcome Issam</p>
        <p>Please select a user to start chatting :) </p>
        <BiSolidMessageAdd className="text-4xl md:text-8xl text-center text-blue-300" />
      </div>
    </div>
  );
};
