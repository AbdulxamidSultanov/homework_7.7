import React from "react";
import { logo } from "../assets";
const Header = () => {
  return (
    <div className="px-10 py-7 flex justify-between items-center bg-[#191919]">
      <img src={logo} alt="" />
      <div className="flex gap-4 items-center justify-center">
        <button className="px-4 py-3 text-white rounded-2xl bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors delay-100">
          Log in
        </button>
        <button className="px-4 py-3 text-white rounded-2xl bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors delay-100">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
