import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSentMessage from "../../../hooks/useSentMessage";
export default function MessageInput() {
  const [isEmpty, setIsEmpty] = useState(true);

  /*   const checkInput = () => {
    const message = document.getElementById("message").value;
    if (message === "") {
      setIsEmpty(true);
    }
    setIsEmpty(false);
    console.log(isEmpty);
  };
 */

  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSentMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          id="message"
          className="border text-sm rounded-lg bl;ock w-full p-2.5 bg-gray-700 border-gray-600 text-white font-poppins  outline-none"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-blue-400 hover:text-blue-600 duration-300"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoIosSend size={20} />
          )}
        </button>
      </div>
    </form>
  );
}
