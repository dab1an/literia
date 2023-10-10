import React, { useState } from "react";

interface ogLangProps {
  sentence: string;
}

const OgLangCard = (props: ogLangProps) => {
  return (
    <div className=" w-[60%] rounded-md border border-gray-400 bg-white p-7 shadow-md">
      <h1>Translate:</h1>
      <h1 className="text-2xl font-bold">{props.sentence}</h1>
    </div>
  );
};

export default OgLangCard;
