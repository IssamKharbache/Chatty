import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  // search functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Please enter 3 or more characters ");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No user found");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Search..."
        className="input  font-lato outline-none 
        focus:outline-none  border-2  focus:border-blue-500 font-semibold "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle ab  bg-blue-400 text-black border-none hover:bg-blue-500 duration-300">
        <IoIosSearch size={22} />
      </button>
    </form>
  );
}
