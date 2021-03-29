import React from "react";
import logo from "../images/logo.png";

const Loader = ({ size = "w-56", caption = true }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className={`${size} animate-spin-slow`} src={logo} alt="" />
      {caption && <p>Just a moment...</p>}
    </div>
  );
};

export default Loader;
