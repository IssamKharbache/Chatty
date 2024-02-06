import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { BeatLoader, DotLoader, PuffLoader } from "react-spinners";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-1 flex flex-col overflow-auto">
      {conversations.map((conversation, Idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={Idx === conversations.length - 1}
          />
        );
      })}

      {loading && (
        <span className="flex flex-col p-2 items-center justify-center">
          <BeatLoader size={25} color="#6d77d1" />
          <p className="text-clip font-semibold text-[#6d77d1] font-poppins pt-2">
            Loading chat
          </p>
        </span>
      )}
    </div>
  );
}
