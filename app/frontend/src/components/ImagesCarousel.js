import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const ImagesCarousel = () => {
  const onChange = (e) => {};
  return (
    <>
      <Carousel
        showArrows={true}
        onChange={onChange}
        autoPlay={false}
        infiniteLoop={true}
        showThumbs={false}
        transitionTime={1000}
      >
        <div className="max-h-screen">
          <img
            src="https://images.unsplash.com/photo-1595121574471-5e57fec127df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex flex-col w-5/6 mx-auto h-full justify-center  text-gray-700 font-extralight		">
              Handmade soap and skincare products made with nature's finest
              ingredients
              <Link to="/ingredients">
                <button className="border-2 border-gray-700 py-2 px-8 mt-24 uppercase tracking-wider text-gray-700	font-light text-sm md:text-xl duration-300	 hover:text-green-600 hover:border-green-600 transition ease-in-out">
                  Discover More
                </button>
              </Link>{" "}
            </div>
          </p>
        </div>
        <div>
          <img
            src="https://image.freepik.com/free-photo/natural-soap-with-herbs-skin-care-white-background-top-view-copy-space_114106-530.jpg"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex flex-col w-5/6 mx-auto h-full justify-center  text-gray-700 font-extralight		">
              Enjoy the benefits of natural ingredients for your body
              <Link to="/ingredients">
                <button className="border-2 border-gray-700 py-2 px-8 mt-24 uppercase tracking-wider text-gray-700	font-light text-sm md:text-xl duration-300	 hover:text-green-600 hover:border-green-600 transition ease-in-out">
                  Learn More
                </button>
              </Link>
            </div>
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1572336306276-676c92719bec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex flex-col w-5/6 mx-auto h-full justify-center  text-gray-700 font-extralight		">
              You owe yourself a moment of relaxation with our collection of
              natural products
              <Link to="/shop">
                <button className="border-2 border-gray-700 py-2 px-8 mt-24 uppercase tracking-wider text-gray-700	font-light text-sm md:text-xl duration-300	 hover:text-green-600 hover:border-green-600 transition ease-in-out">
                  Shop Now
                </button>
              </Link>
            </div>
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default ImagesCarousel;
