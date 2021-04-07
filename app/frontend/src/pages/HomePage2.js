import React, { useEffect } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Product from "../components/product/Product";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../redux/actions/product.actions";
import { Link } from "react-router-dom";
const HomePage2 = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading } = product;

  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  return (
    <div className="bg-white">
      <section>
        <ImagesCarousel />
      </section>
      <section className="pb-10 h-auto bg-green-600 bg-opacity-80">
        <ul className="w-4/6 h-full gap-x-6 gap-y-5 mx-auto text-white items-center grid grid-cols-1 md:w-5/6 md:grid-cols-3 md:gap-y-0">
          <li className="h-5/6 pt-2 px-16 flex flex-col space-y-3 items-center">
            <i className="fas fa-gift text-opacity-70 rounded-full p-3 fa-2x bg-green-100 text-green-600"></i>
            <p className="text-lg uppercase hero-panel-title">
              Beautifully packed
            </p>
            <p className="px-4 break-words text-center font-light text-sm">
              Each product is gently packed in a stylish colorful wrap.
            </p>
          </li>
          <li className="h-5/6 pt-2 px-16 flex flex-col space-y-3 items-center">
            <i className="fas fa-hand-holding-water   text-opacity-70 rounded-full p-3 fa-2x bg-green-100 text-green-600"></i>
            <p className="text-lg uppercase hero-panel-title">Truly handmade</p>
            <p className="px-4 break-words text-center font-light text-sm">
              Everything in our shop is made by hand and with great care.
            </p>
          </li>
          <li className="h-5/6 pt-2 px-16 flex flex-col space-y-3 items-center">
            <i className="fas fa-leaf  text-opacity-70 rounded-full p-3 fa-2x bg-green-100 text-green-600"></i>
            <p className="text-lg uppercase hero-panel-title">100% NAtural </p>
            <p className="px-4 break-words text-center font-light text-sm">
              Our products are free from anything synthetic or anything
              artificial.
            </p>
          </li>
        </ul>
      </section>
      <section className="w-full md:w-10/12 mx-auto py-24">
        <h2 className="text-gray-700 font-extralight text-5xl	 text-center">
          New products
        </h2>
        <ul className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 mt-12 md:gap-x-6">
          {loading === "loading" ? (
            <h2>loading</h2>
          ) : (
            products.slice(0, 4).map((p, index) => (
              <li key={index}>
                <Product p={p} />
              </li>
            ))
          )}
        </ul>
      </section>
      <section className="w-full md:w-10/12 mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            style={{ backgroundColor: "#D8D2CA" }}
            className="bg-opacity-50 flex"
          >
            <div className="flex flex-col justify-around items-center p-4 w-10/12 md-w-3/4 mx-auto">
              <h2 className="text-gray-600 font-extralight text-5xl px-2	 text-center">
                THE BEST OF KA.A.YO
              </h2>
              <p className="text-center text-gray-600">
                Handmade soap is exactly that made by hand. They are made with
                vegetable oil and/or animals fats for their skin care
                properties. The soapmaker will often include additives to the
                soap for their healing, exfoliating and esthetic properties.
              </p>
              <button className="animated-button  uppercase block py-2 px-4 w-max  border-2 bg-transparent border-green-500 font-semi-bold text-gray-600 mx-auto hover:text-white">
                Shop best product
              </button>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-full">
              <img
                className="object-cover w-full object-bottom"
                style={{ height: "562px" }}
                src="https://res.cloudinary.com/dilv93gvb/image/upload/v1617282938/kaayo/hecpb4faifpjotbmckqf.png"
                alt=""
              />
              <div className="test absolute inset-1/2	w-1/3 h-1/3 bg-green-100 rounded-full text-gray-700	flex flex-col items-center justify-around py-10 opacity-0 transform -translate-y-2/4 -translate-x-2/4 hover:scale-125	 transition-all ease-in-out duration-300 hover:opacity-100 hover:bg-opacity-50">
                <div className=" text-center text-gray-600 text-md uppercase truncate-2nd hover:text-gray-400">
                  {products && products[0] && products[0].name}
                </div>
                <div className="font-bold">
                  &#8363;
                  {products && products[0] && products[0].price}
                </div>
                <i className="fas fa-shopping-bag opacity-70 hover:text-gray-400"></i>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full h-full">
              <img
                className="object-cover w-full object-bottom"
                style={{ height: "562px" }}
                src="https://res.cloudinary.com/dilv93gvb/image/upload/v1617282938/kaayo/hecpb4faifpjotbmckqf.png"
                alt=""
              />
              <div className="test absolute inset-1/2	w-1/3 h-1/3 bg-green-100 rounded-full text-gray-700	flex flex-col items-center justify-around py-10 opacity-0 transform -translate-y-2/4 -translate-x-2/4 hover:scale-125	 transition-all ease-in-out duration-300 hover:opacity-100 hover:bg-opacity-50">
                <div className=" text-center text-gray-600 text-md uppercase truncate overflow-ellipsis w-32 hover:text-gray-400">
                  <Link to="/">
                    {products && products[1] && products[1].name}
                  </Link>
                </div>
                <div className="font-bold">
                  &#8363;
                  {products && products[1] && products[1].price}
                </div>
                <i className="fas fa-shopping-bag opacity-70 hover:text-gray-400"></i>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: "#D8D2CA" }}
            className="bg-opacity-50 flex"
          >
            <div className="flex flex-col justify-around items-center p-4 w-3/4 mx-auto">
              <h2 className="text-gray-600 font-extralight text-5xl	 text-center">
                BALANCE FOR SENSITIVE SKIN
              </h2>
              <p className="text-center text-gray-600">
                Handmade soap is exactly that made by hand. They are made with
                vegetable oil and/or animals fats for their skin care
                properties. The soapmaker will often include additives to the
                soap for their healing, exfoliating and esthetic properties
              </p>
              <button className="animated-button  uppercase block py-2 px-4 w-max  border-2 bg-transparent border-green-500 font-semi-bold text-gray-600 mx-auto hover:text-white">
                Shop best product
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="review-section w-full h-auto text-gray-700">
        <div className="w-5/6 mx-auto py-24 ">
          <h2 className="uppercase mb-8 font-extralight text-5xl text-center">
            clients about us
          </h2>
          <div>
            <ReviewsCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage2;
