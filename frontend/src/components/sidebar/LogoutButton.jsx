import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function LogoutButton() {
  return (
    <div className=" mt-4">
      <RiLogoutCircleLine
        size={25}
        className="text-blue-300 hover:text-blue-500 cursor-pointer duration-200"
      />
    </div>
  );
}
