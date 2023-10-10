import React from "react";
import { FcGoogle } from "react-icons/fc";
// import Button from "rsuite/Button";
import LogInButton from "../button/LogInButton";
import SignInButton from "../button/SignInButton";

const Nav = ({ handleFunction }: any) => {
  return (
    <div className="flex w-full items-center justify-between p-5">
      <div className="on-load-nav  pl-2 text-3xl font-bold text-black">
        Literia
      </div>
      {/* <div>
        <a href=""></a>
        <a href="../pages/proto.tsx">App</a>
        <a href=""></a>
      </div> */}
      <div className="on-load-nav flex items-center justify-center gap-5 pr-4">
        {/* <Button
          onClick={handleFunction}
          appearance="primary"
          color="blue"
          startIcon={<FcGoogle />}
        >
          Login With Google
        </Button> */}
        <button className="rounded-full bg-gradient-to-r from-charcoal to-cerulean px-6 py-3 font-bold text-white hover:animate-pulse hover:brightness-110">
          Log In
        </button>
        <LogInButton />
      </div>
    </div>
  );
};

export default Nav;
