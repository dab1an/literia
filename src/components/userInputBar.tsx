import React from "react";

import { IoMdSend } from "react-icons/io";

export const UserInputBar = () => {
  return (
    <div className="flex h-[10%] items-center justify-center border-t border-t-gray-400 bg-white">
      <form
        action=""
        className="flex h-full w-full items-center justify-center"
      >
        <input
          type="text"
          className="h-[60%] w-[90%] rounded-md border border-gray-500 pl-3"
        />

        <button>
          {" "}
          <IoMdSend
            size={45}
            className="pl-2 text-cerulean hover:text-charcoal"
          />
        </button>
      </form>
      {/* <div className=" h-[60%] w-[90%] rounded-md border border-gray-500"></div> */}
    </div>
  );
};
