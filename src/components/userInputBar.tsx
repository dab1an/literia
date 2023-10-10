import React, { useState } from "react";

import { IoMdSend } from "react-icons/io";

interface UserInputBarProps {
  onTranslationReceived: (translation: string) => void;
}

export const UserInputBar: React.FC<UserInputBarProps> = ({
  onTranslationReceived,
}) => {
  const [userInput, setUserInput] = useState("");

  async function submitInput(e: React.FormEvent) {
    e.preventDefault();
    onTranslationReceived(userInput);
    setUserInput("");
    // e.preventDefault();
    // const res = await fetch("/api", {
    //   method: "POST",
    //   body: JSON.stringify({ userInput }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // const data = await res.json();
    // console.log(data);
    // onTranslationReceived(data.translation);
  }

  return (
    <div className="flex h-[10%] items-center justify-center border-t border-t-gray-400 bg-white">
      <form
        action=""
        className="flex h-full w-full items-center justify-center"
        onSubmit={submitInput}
      >
        <input
          type="text"
          className="h-[60%] w-[90%] rounded-md border border-gray-500 pl-3"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />

        <button>
          {" "}
          <IoMdSend
            size={45}
            className="pl-2 text-cerulean hover:text-charcoal"
            onClick={submitInput}
          />
        </button>
      </form>

      {/* <div className="h-[60%] w-[90%] rounded-md border border-gray-500">
        Response: <p>{responseData}</p>
      </div> */}
    </div>
  );
};
