import React from "react";
// import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <section
        style={{ height: 500, overflow: "hidden" }}
        className="hero flex items-center justify-center flex-col space-y-4 relative w-full"
      >
        <h1 className="text-4x1 text-white">Welcome to KA.A.YO Handcrafted</h1>
        <button className="opacity-70 py-2 px-4 rounded-xl text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-400 hover:to-green-600 transition duration-200 ease-in-out">
          Shop Now
        </button>
      </section>
      <section className="flex flex-wrap items-center mx-auto w-11/12 mt-12 ">
        <div className="flex justify-between h-full w-full mb-12 ">
          <div className="section-soap w-1/2 relative flex justify-center items-center rounded">
            <p className=" font-bold text-6xl text-white">Soaps</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
          <div className="section-butter w-5/12 relative flex justify-center items-center rounded-lg">
            <p className=" font-bold text-6xl text-white">Body Butter</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </div>
        <div className="flex justify-between h-full w-full  pb-12">
          <div className="section-lip  w-5/12 relative flex justify-center items-center rounded-xl">
            <p className=" font-bold text-6xl text-white">Lip Balms</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
          <div className="section-shampoo w-1/2 relative flex justify-center items-center rounded-2xl	">
            <p className=" font-bold text-6xl text-white">Shampoo Bars</p>
            <div className="w-full  h-full absolute transition-opacity duration-500 ease opacity-0 hover:opacity-30 hover:bg-green-300 transition-all"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
