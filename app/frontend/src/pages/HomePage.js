import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";

const HomePage = () => {
  return (
    <div className="pb-12">
      <div className="h-14  w-full border-t border-green-100 bg-green-100 grid justify-center text-gray-700 grid-cols-1 md:px-4 ">
        <ul className="flex justify-around w-full mx-auto md:w-2/3">
          <li className="my-auto">
            <Link to="/about">Our Beginning</Link>
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

      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center mx-auto w-11/12 mt-12 ">
        <ScrollAnimation className=" " animateIn="slideInUp">
          <div className="section-soap w-full relative flex justify-center items-center rounded">
            <p className=" font-bold text-6xl text-white">Soaps</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={500} className="" animateIn="slideInUp">
          <div className="section-butter w-full relative flex justify-center items-center rounded-lg">
            <p className=" font-bold text-6xl text-white">Body Butter</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className=" " animateIn="slideInUp">
          <div className="section-lip  w-full relative flex justify-center items-center rounded-xl">
            <p className=" font-bold text-6xl text-white">Lip Balms</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={500} className="" animateIn="slideInUp">
          <div className="section-shampoo w-full relative flex justify-center items-center rounded-2xl	">
            <p className=" font-bold text-6xl  text-white">Shampoo Bars</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default HomePage;
