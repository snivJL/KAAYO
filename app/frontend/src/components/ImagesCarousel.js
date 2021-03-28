import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImagesCarousel = () => {
  const onChange = (e) => {
    console.log(e);
  };
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
        <div>
          <img
            src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830139/kaayo/products/Body_Butter_aoyjq1.png"
            alt="pic"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830137/kaayo/products/cucumber_ujcp9s.png"
            alt="pic"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616830148/kaayo/products/Tet_collection_1_mjjphc.png"
            alt="pic"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default ImagesCarousel;
