import React, { useEffect } from "react";
import ImagesCarousel from "../components/ImagesCarousel";
import Product from "../components/product/Product";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../redux/actions/product.actions";
const HomePage2 = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading } = product;

  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <section>
        <ImagesCarousel />
      </section>
      <section className="pb-10 h-auto bg-green-600 bg-opacity-80">
        <ul className="w-4/6 h-full gap-x-6 gap-y-5 mx-auto text-white items-center grid grid-cols-1 md:w-5/6 md:grid-cols-3 md:gap-y-0">
          <li className="h-5/6 pt-2 px-16 flex flex-col space-y-3 items-center">
            <i className="fas fa-gift text-opacity-70 rounded-full p-3 fa-2x bg-green-100 text-green-600"></i>
            <p className="text-md uppercase hero-panel-title">
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
      <section className="w-10/12 mx-auto py-24">
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
    </div>
  );
};

export default HomePage2;
