import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { BiSolidMessageAdd } from "react-icons/bi";
import leftarrow from "../images/leftarrow.svg";
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContext";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // unmount component
    return () => setSelectedConversation(null);
  }, []);
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-blue-400 px-4 py-2 mb-2">
            <span className="text-gray-200 font-poppins  ">
              {selectedConversation.fullName}
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
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="px-4  text-center sm:text-lg md:text-3xl  text-gray-200 font-ProtestRiot flex flex-col items-center gap-8">
        <img src={leftarrow} alt="" className="w-16 md:w-24" />
        <p>Welcome {authUser.fullName}</p>
        <p>Please select a user to start chatting :) </p>
        <BiSolidMessageAdd className="text-4xl md:text-8xl text-center text-blue-300" />
      </div>
    </div>
  );
};
