import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const ReviewsCarousel = () => {
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
        <div className="relative mt-24 h-full">
          <div className="w-5/6 relative   carousel-review-card border-r-2 border-l-2 border-green-400 mx-auto p-4">
            <div className="carousel-review-content">
              <p className="text-center py-4 px-2">
                My skin has been very dry for years, and since I have been
                buying this soap, it has become very soft. Thanks for using
                natural ingredients and essential oils in your products! I
                couldn’t be more pleased with this soaps.
              </p>
            </div>
            <div className="carousel-review-author w-full">
              <div className="flex flex-col w-24 space-y-2  absolute inset-x-1/2	transform -translate-x-1/2">
                <div className="w-16 mx-auto rounded-full">
                  <img
                    className="w-16 rounded-full"
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/37598924_1748840731817919_4205345845521940480_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=_DmPuZ2rTCMAX-C4xA1&_nc_ht=scontent.fsgn5-6.fna&oh=709e4890c6c35a1cb4a08c055c371ff1&oe=608F01A0"
                    alt=""
                  />
                </div>
                <p>Julien Lejay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-24 h-full">
          <div className="w-5/6 relative   carousel-review-card border-r-2 border-l-2 border-green-400 mx-auto p-4">
            <div className="carousel-review-content">
              <p className="text-center py-4 px-2">
                My skin has been very dry for years, and since I have been
                buying this soap, it has become very soft. Thanks for using
                natural ingredients and essential oils in your products! I
                couldn’t be more pleased with this soaps.
              </p>
            </div>
            <div className="carousel-review-author w-full">
              <div className="flex flex-col w-24 space-y-2  absolute inset-x-1/2	transform -translate-x-1/2">
                <div className="w-16 mx-auto rounded-full">
                  <img
                    className="w-16 rounded-full"
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/37598924_1748840731817919_4205345845521940480_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=_DmPuZ2rTCMAX-C4xA1&_nc_ht=scontent.fsgn5-6.fna&oh=709e4890c6c35a1cb4a08c055c371ff1&oe=608F01A0"
                    alt=""
                  />
                </div>
                <p>Julien Lejay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-24 h-full">
          <div className="w-5/6 relative   carousel-review-card border-r-2 border-l-2 border-green-400 mx-auto p-4">
            <div className="carousel-review-content">
              <p className="text-center py-4 px-2">
                My skin has been very dry for years, and since I have been
                buying this soap, it has become very soft. Thanks for using
                natural ingredients and essential oils in your products! I
                couldn’t be more pleased with this soaps.
              </p>
            </div>
            <div className="carousel-review-author w-full">
              <div className="flex flex-col w-24 space-y-2  absolute inset-x-1/2	transform -translate-x-1/2">
                <div className="w-16 mx-auto rounded-full">
                  <img
                    className="w-16 rounded-full"
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/37598924_1748840731817919_4205345845521940480_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=_DmPuZ2rTCMAX-C4xA1&_nc_ht=scontent.fsgn5-6.fna&oh=709e4890c6c35a1cb4a08c055c371ff1&oe=608F01A0"
                    alt=""
                  />
                </div>
                <p>Julien Lejay</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default ReviewsCarousel;
