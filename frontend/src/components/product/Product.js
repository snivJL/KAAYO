import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

const Product = ({ p }) => {
  return (
    <div>
      <div className="product-card relative w-72 h-80">
        <Link to={`/product/${p._id}`}>
          <img
            className="product-card-img rounded-lg"
            src={p.images[0].imageUrl}
            alt=""
          />
          <div className="card-overlay justify-center items-center absolute w-72 h-16 bottom-0 bg-green-800 opacity-40 text-center text-white ">
            <p>See more</p>
          </div>
        </Link>
        {/* <div className="absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm text-white">
          $ 16.80
        </div>
        <div className="absolute right-0 w-10 mr-2">
          <a href="/">
            <img
              className="rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt=""
            />
          </a>
        </div> */}
      </div>
      <div className="p-3">
        <h3 className="mr-10 text-lg py-2 truncate-2nd">
          <a
            className="hover:text-blue-500"
            href="/huawwei-p20-pro-complete-set-with-box-a.7186128376"
          >
            {p.name}
          </a>
        </h3>
        <Rating />
        <div>
          <p className="py-2 text-gray-500">
            &#8363;
            <span className="text-lg">{p.price}</span>
          </p>
        </div>
        <AddToCartButton product={p} />
      </div>
    </div>
  );
};

export default Product;
