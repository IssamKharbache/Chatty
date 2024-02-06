import React from "react";

import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-blue-500   p-2 py-1 cursor-pointer ${
          isSelected ? "bg-blue-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full ">
            <img src={conversation.profileAvatar} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between ">
            <p className=" text-gray-200 font-poppins">
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1 " />}
    </>
  );
}
