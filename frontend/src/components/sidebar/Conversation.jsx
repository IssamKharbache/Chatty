import React from "react";

export default function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-blue-600   p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img src="https://avatar.iran.liara.run" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between ">
            <p className=" text-gray-200 font-poppins">Issam</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1 " />
    </>
  );
}
