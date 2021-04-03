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
        <div>
          <img
            src="https://image.freepik.com/free-photo/natural-soap-with-herbs-skin-care-white-background-top-view-copy-space_114106-530.jpg"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex w-5/6 mx-auto h-3/5 justify-center items-center text-gray-700 font-extralight		">
              Handmade soap and skincare products made with nature's finest
              ingredients
            </div>
            <Link to="/ingredients">
              <button className="border-2 border-gray-700 py-3 px-10 uppercase tracking-wider	font-light text-sm md:text-xl hover:text-green-600 hover:border-green-600 transition ease-in-out">
                Discover More
              </button>
            </Link>
          </p>
        </div>
        <div>
          <img
            src="https://image.freepik.com/free-photo/natural-soap-with-herbs-skin-care-white-background-top-view-copy-space_114106-530.jpg"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex w-3/5 mx-auto h-3/5 justify-center items-center text-gray-700 font-extralight		">
              Enjoy the benefits of natural ingredients for your body
            </div>
            <Link to="/ingredients">
              <button className="border-2 border-gray-700 py-3 px-10 uppercase tracking-wider	 font-light text-sm md:text-xl hover:text-green-600 hover:border-green-600 transition ease-in-out">
                Learn More
              </button>
            </Link>
          </p>
        </div>

        <div>
          <img
            src="https://image.freepik.com/free-photo/natural-soap-with-herbs-skin-care-white-background-top-view-copy-space_114106-530.jpg"
            alt="pic"
          />
          <p className="legend-custom relative">
            <div className="flex w-5/6 mx-auto h-3/5 justify-center items-center text-gray-700 font-extralight		">
              You owe yourself a moment of relaxation with our collection of
              natural products
            </div>
            <Link to="/shop">
              <button className="border-2 border-gray-700 py-3 px-10 uppercase tracking-wider	 font-light text-sm md:text-xl hover:text-green-600 hover:border-green-600 transition ease-in-out">
                Shop Now
              </button>
            </Link>
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default ImagesCarousel;
