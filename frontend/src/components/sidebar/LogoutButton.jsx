import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

export default function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className=" mt-4">
      {!loading ? (
        <RiLogoutCircleLine
          size={25}
          className="text-blue-300 hover:text-blue-500 cursor-pointer duration-200"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}
