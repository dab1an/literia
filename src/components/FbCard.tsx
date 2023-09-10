import React from "react";

interface fbCardProps {
  fbMsg: string;
  skills: string[];
}
const FbCard = (props: fbCardProps) => {
  return (
    <div className="flex w-[60%] flex-col gap-2">
      <div className=" flex flex-col border border-gray-400 bg-green-100 p-7 shadow-sm">
        <h1 className="pb-2 text-2xl">Feedback: {props.fbMsg} </h1>
        <p className="text-xs">What to improve: {props.skills.join(", ")}</p>
      </div>

      <div className="flex h-9 w-[50%] gap-2 bg-white">
        <div className=" bg-white-500 flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
          <h1>Similair</h1>
        </div>
        <div className=" flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
          <h1>Another</h1>
        </div>
        <div className=" flex h-full items-center justify-center rounded-md border border-gray-400 p-2">
          <h1>Save</h1>
        </div>
      </div>
    </div>
  );
};

export default FbCard;
