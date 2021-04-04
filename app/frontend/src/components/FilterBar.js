import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Default sorting");
  const product = useSelector((state) => state.product);
  const { numProducts } = product;
  return (
    <div className="container-md mx-auto bg-green-200 bg-opacity-60  p-2">
      <div className="flex items-center ">
        <NavDropdown
          className="bg-white bg-green-300 px-2 ml-1 font-extra-light"
          title={title}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            name="Sort by price: low to high"
            onClick={(e) => {
              setTitle(e.target.name);
              dispatch(
                productActions.getAllProducts(
                  undefined,
                  1,
                  undefined,
                  "price",
                  "asc"
                )
              );
            }}
          >
            Sort by price: low to high
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Sort by price: high to low"
            onClick={(e) => {
              setTitle(e.target.name);
              dispatch(
                productActions.getAllProducts(
                  undefined,
                  1,
                  undefined,
                  "price",
                  "desc"
                )
              );
            }}
          >
            Sort by price: high to low
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Sort by latest"
            onClick={(e) => {
              setTitle(e.target.name);
              dispatch(
                productActions.getAllProducts(
                  undefined,
                  1,
                  undefined,
                  "createdAt",
                  "desc"
                )
              );
            }}
          >
            Sort by latest
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Sort by average rating"
            onClick={(e) => {
              setTitle(e.target.name);
              dispatch(
                productActions.getAllProducts(
                  undefined,
                  1,
                  undefined,
                  "ratings",
                  "desc"
                )
              );
            }}
          >
            Sort by average rating
          </NavDropdown.Item>
          <NavDropdown.Item name="Sort by popularity">
            Sort by popularity
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        <div className="ml-auto text-gray-700 text-sm pr-1">
          {numProducts === 0
            ? "No results found."
            : numProducts > 12
            ? `Showing 1-12 of ${numProducts} results`
            : `Showing ${numProducts}`}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
