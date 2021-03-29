import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";

const HomePage = () => {
  return (
    <div className="pb-12">
      <div className="h-14 bg-green-600 w-full border-t border-gray-100 grid justify-center md:grid-cols-1 text-gray-100 bg-opacity-50 px-4  sm:grid-cols-1">
        <ul className="flex justify-around w-2/3 mx-auto">
          <li className="my-auto">
            <Link to="/about">Our Story</Link>
          </li>
          <li className="my-auto">
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li className="my-auto">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="my-auto">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <section>
        <ImagesCarousel />
      </section>
      <ScrollAnimation animateIn="fadeIn">
        <Link to="/shop">
          <section
            style={{ height: 500, overflow: "hidden" }}
            className="hero flex items-center justify-center flex-col space-y-4 relative w-full"
          >
            <div className="text-lg text-white italic">
              Welcome to KA.A.YO Handcrafted
            </div>
            <button className="opacity-70 py-2 px-4 rounded-xl text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-400 hover:to-green-600 transition duration-200 ease-in-out">
              Shop Now
            </button>
          </section>
        </Link>
      </ScrollAnimation>

      <section className="flex flex-wrap items-center mx-auto w-11/12 mt-12 ">
        <div className="flex justify-between h-full w-full mb-12 ">
          <ScrollAnimation className="w-5/6 mr-12" animateIn="slideInUp">
            <div className="section-soap w-full relative flex justify-center items-center rounded">
              <p className=" font-bold text-6xl text-white">Soaps</p>
              <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={500} className="w-5/6" animateIn="slideInUp">
            <div className="section-butter w-full relative flex justify-center items-center rounded-lg">
              <p className=" font-bold text-6xl text-white">Body Butter</p>
              <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="flex justify-between h-full w-full  pb-12">
          <ScrollAnimation className="w-5/6 mr-12" animateIn="slideInUp">
            <div className="section-lip  w-full relative flex justify-center items-center rounded-xl">
              <p className=" font-bold text-6xl text-white">Lip Balms</p>
              <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={500} className="w-5/6" animateIn="slideInUp">
            <div className="section-shampoo w-full relative flex justify-center items-center rounded-2xl	">
              <p className=" font-bold text-6xl text-white">Shampoo Bars</p>
              <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
