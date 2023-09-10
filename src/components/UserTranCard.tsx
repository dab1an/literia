import React from "react";

interface userTranProps {
  translation: string;
}

const UserTranCard = (props: userTranProps) => {
  return (
    <div className="break-norma h-auto w-[60%]">
      <h1 className=" text-gray-500">Your Translation: {props.translation}</h1>
    </div>
  );
};

export default UserTranCard;
