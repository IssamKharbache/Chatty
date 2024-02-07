import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

export default function SideBar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-36 md:w-60">
      <SearchInput />
      <div className="divider px-3 "></div>
      <Conversations />
      <div className="divider px-7"></div>
      <LogoutButton />
    </div>
  );
}
