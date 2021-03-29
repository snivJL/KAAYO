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
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <Link to="/about">
          <div>
            <img
              src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830139/kaayo/products/Body_Butter_aoyjq1.png"
              alt="pic"
            />
            <p className="legend-custom relative italic">
              <span className="absolute -left-72 top-40  w-full h-full">
                Our
              </span>
              <span className="absolute -left-48 top-60 h-full w-full">
                Beginning
              </span>
            </p>
          </div>
        </Link>
        <Link to="/ingredients">
          <div>
            <img
              src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830137/kaayo/products/cucumber_ujcp9s.png"
              alt="pic"
            />
            <p className="legend-custom relative italic">
              <span className="absolute -left-72 top-44  w-full h-full">
                Ingredients
              </span>
            </p>
          </div>
        </Link>
        <Link to="/shop">
          <div>
            <img
              src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830148/kaayo/products/Tet_collection_1_mjjphc.png"
              alt="pic"
            />
            <p className="legend-custom relative italic">
              <span className="absolute -left-72 top-40  w-full h-full">
                What's
              </span>
              <span className="absolute -left-44 top-60 h-full w-full">
                New ?
              </span>
            </p>
          </div>
        </Link>
      </Carousel>
    </>
  );
};

export default ImagesCarousel;
