import React from "react";
import { Link } from "react-router-dom";
import productActions from "../../redux/actions/product.actions";
import { useDispatch } from "react-redux";

const CategoriesPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-14 bg-green-100 w-full border-t border-green-500 grid md:grid-cols-1 text-gray-700 items-center justify-center px-4  sm:grid-cols-1">
      <ul className="flex justify-self-center">
        <li className="flex items-center space-x-3 hover:text-gray-500">
          <Link to={`/shop/body-butter`}>
            <div
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Body Butter"
                  )
                )
              }
            >
              Body Butter
            </div>
          </Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="/shop/body-soap">
            <div
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Body Soap"
                  )
                )
              }
            >
              Body Soap
            </div>
          </Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="/shop/face-soap">
            <div
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Face Soap"
                  )
                )
              }
            >
              Face Soap
            </div>
          </Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="/shop/baby-soap">
            <div
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Baby Soap"
                  )
                )
              }
            >
              Baby Soap
            </div>
          </Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="/shop/shampoo-bar">
            <div
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Shampoo Bar"
                  )
                )
              }
            >
              Shampoo Bar
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
