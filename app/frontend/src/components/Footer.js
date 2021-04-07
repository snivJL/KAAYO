import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white h-24 text-gray-700">
      <div className=" flex w-10/12 h-full mx-auto items-center">
        <div className="flex">
          KA.A.YO Handcrafted
          <span className="text-gray-400">
            &copy; 2021 - All rights reserved.
          </span>
        </div>
        <ul className="flex ml-auto space-x-2 font-light items-center">
          <li className="hover:bg-green-500 transition ease-in-out border rounded-full p-2 h-8 w-8 flex justify-center items-center text-white bg-green-300">
            <a
              href="https://www.facebook.com/ka.a.yohandcrafted/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-f  "></i>
            </a>
          </li>

          <li className="hover:bg-green-500 transition ease-in-out border rounded-full p-2 h-8 w-8 flex justify-center items-center text-white bg-green-300">
            <a
              href="https://www.instagram.com/ka.a.yo_handcrafted/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
