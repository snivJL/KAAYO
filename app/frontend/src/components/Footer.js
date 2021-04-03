import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-600 h-24 px-4 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3  md:pl-18  justify-center items-center text-gray-100">
      {/* <div className="text-xl">
        <img className="w-32" src={logo} alt="" />
      </div> */}
      <ul className="flex space-x-2 md:col-span-2 md:w-full md:justify-around font-light items-center justify-self-center">
        <Link to="/about">
          <li className="hover:text-gray-400 border-r border-green-600 pr-2 ">
            About Us
          </li>
        </Link>
        <Link to="/policy">
          <li className="hover:text-gray-400 border-r border-green-600 pr-2 ">
            Privacy Policy
          </li>{" "}
        </Link>
        <div className="flex space-x-2">
          <a
            href="https://www.facebook.com/ka.a.yohandcrafted/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            <li className="hover:text-gray-400 ">
              <i className="fab fa-facebook-square fa-2x "></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com/ka.a.yo_handcrafted/"
            target="_blank"
            rel="noreferrer"
          >
            <li className="hover:text-gray-400">
              <i className="fab fa-instagram fa-2x"></i>
            </li>
          </a>
        </div>
      </ul>
      <div className="justify-self-center md:justify-self-end md:ml-auto">
        &copy; 2021 - KA.A.YO Handcrafted
      </div>
    </div>
  );
};

export default Footer;
