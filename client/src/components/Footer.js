import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-400 h-24 px-4 grid grid-cols-3 items-center text-gray-700">
      <div className="text-xl">KA.A.YO</div>
      <ul className="flex space-x-2 font-light items-center justify-self-center">
        <Link to="/about">
          <li className="hover:text-gray-400 border-r border-green-600 pr-2 ">
            About Us
          </li>
        </Link>
        <Link to="/policy">
          <li className="hover:text-gray-400 border-r border-green-600 pr-2">
            Privacy Policy
          </li>{" "}
        </Link>
        <a
          href="https://www.facebook.com/ka.a.yohandcrafted/?ref=page_internal"
          target="_blank"
          rel="noreferrer"
        >
          <li className="hover:text-gray-400 ">
            <i class="fab fa-facebook-square fa-2x "></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com/ka.a.yo_handcrafted/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="hover:text-gray-400">
            <i class="fab fa-instagram fa-2x"></i>
          </li>
        </a>
      </ul>
      <div className="justify-self-end">&copy; 2021 - KA.A.YO Handcrafted </div>
    </div>
  );
};

export default Footer;
