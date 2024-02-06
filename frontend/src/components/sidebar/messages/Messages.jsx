import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../../hooks/useGetMessages";
import MessagesSkeleton from "../../../loadingSkeleton/MessagesSkeleton";

export default function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* loading the messages */}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })}

      {/* loading the skeleton */}
      {loading && [...Array(3)].map((_, idx) => <MessagesSkeleton key={idx} />)}
      {/* loading component for no messages conversation */}
      {!loading && messages.length === 0 && (
        <p className="flex text-center items-center font-poppins pt-16 text-base md:text-2xl justify-center text-blue-200">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}
