import React from "react";

const Hero = () => {
  return (
    <div className="flex w-3/4 flex-col items-center pb-9 pt-9">
      <div className="on-load text-7xl font-bold text-black">
        Not just translating
      </div>

      <div className="on-load-delay flex gap-4 pb-4 text-8xl font-bold">
        <p>this is</p>
        <p className="gradient  pb-4">learning</p>
      </div>
      <div className="on-load-delay-extra pt-2 text-xl text-gray-500">
        Subheading Placeholder
      </div>
      <div className=" flex h-full w-full justify-center pt-8">
        <img
          src="https://picsum.photos/1000/600"
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
