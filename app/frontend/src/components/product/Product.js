import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

const Product = ({ p }) => {
  return (
    <div className="w-64  mb-16 mx-auto  ">
      <div className="product-card relative w-full">
        <Link to={`/product/${p._id}`}>
          <img
            className=" product-card-img w-full h-full object-cover"
            src={p.images[0].imageUrl}
            alt=""
          />
          {/* <div className="card-overlay justify-center items-center absolute w-full h-16 bottom-0 bg-green-800 opacity-40 text-center text-white ">
            <p>See more</p>
          </div> */}
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
        <h3 className=" text-center text-green-400 text-lg uppercase py-2 truncate-2nd">
          <p className="hover:text-green-600">{p.name}</p>
        </h3>
        <h3 className=" text-center text-green-500 text-sm italic  truncate-2nd">
          <p className="hover:text-green-600">{p.category}</p>
        </h3>
        <p className="py-2 text-center text-gray-600">
          &#8363;
          <span className="text-lg">{p.price}</span>
        </p>
        <div className="flex items-center pb-2">
          <Rating value={p.rating} />
        </div>
        <AddToCartButton product={p} />
      </div>
    </div>
  );
};

export default Product;
