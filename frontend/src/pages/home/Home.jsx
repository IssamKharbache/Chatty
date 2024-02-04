import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/sidebar/messages/MessageContainer";

export default function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-700  shadow-md">
      <SideBar />
      <MessageContainer />
    </div>
  );
}
