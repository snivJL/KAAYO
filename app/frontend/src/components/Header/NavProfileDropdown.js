import React, { useState } from "react";

const NavProfileDropdown = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="relative flex flex-col ">
      <button
        className="relative  z-10 flex block rounded-md bg-white p-2 focus:outline-none"
        onClick={() => setShow(!show)}
      >
        Julien
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          !show
            ? "hidden"
            : "block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
        }
      >
        Logout
      </div>
    </div>
  );
};

export default NavProfileDropdown;
