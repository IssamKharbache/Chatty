import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";
import { extractTime } from "../../../outils/extractTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const formatedTime = extractTime(message.createdAt);
  const profileAvatar = fromMe
    ? authUser.profileAvatar
    : selectedConversation?.profileAvatar;

  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-600";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${profileAvatar}`} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} font-poppins`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
}
