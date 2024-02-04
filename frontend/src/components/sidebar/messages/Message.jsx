import React from "react";

export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run" alt="user avatar" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hey how is it going
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}
