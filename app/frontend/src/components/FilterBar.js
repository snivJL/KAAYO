import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";

const FilterBar = ({ currentPage }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Latest");
  const [cat, setCat] = useState("All");
  const product = useSelector((state) => state.product);
  const { numProducts, pageCount } = product;
  return (
    <div className="container-md mx-auto bg-green-200 bg-opacity-60  p-2">
      <div className="flex items-center ">
        <NavDropdown
          className="bg-white bg-green-300 px-2 ml-1 text-gray-700 font-extra-light"
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
                  "rating",
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
        </NavDropdown>

        <NavDropdown
          className="bg-white bg-green-300 px-2 ml-1 text-gray-700 font-extra-light"
          title={cat}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            name="All"
            onClick={(e) => {
              setCat(e.target.name);
              dispatch(productActions.getAllProducts());
            }}
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Soaps"
            onClick={(e) => {
              setCat(e.target.name);
              dispatch(
                productActions.getFilteredProducts(undefined, undefined, "soap")
              );
            }}
          >
            Soaps
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Body Butter"
            onClick={(e) => {
              setCat(e.target.name);
              dispatch(
                productActions.getFilteredProducts(
                  undefined,
                  undefined,
                  "Body Butter"
                )
              );
            }}
          >
            Boby Butter
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Lip Balms"
            onClick={(e) => {
              setCat(e.target.name);
              dispatch(
                productActions.getFilteredProducts(
                  undefined,
                  undefined,
                  "Lip Balm"
                )
              );
            }}
          >
            Lip Balms
          </NavDropdown.Item>
          <NavDropdown.Item
            name="Shampoo Bar"
            onClick={(e) => {
              setCat(e.target.name);
              dispatch(
                productActions.getFilteredProducts(
                  undefined,
                  undefined,
                  "Shampoo Bar"
                )
              );
            }}
          >
            Shampoo Bar
          </NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item>Separated link</NavDropdown.Item> */}
        </NavDropdown>
        {/* {console.log(numProducts - currentPage * 9, numProducts, currentPage)} */}
        <div className="ml-auto text-gray-700 text-sm pr-1">
          {numProducts === 0
            ? "No results found."
            : numProducts > 9
            ? `Showing ${currentPage === 0 ? 1 : 1 * (9 * (pageCount - 1))}-${
                numProducts -
                (currentPage === 0
                  ? numProducts - 9 * (pageCount - 1)
                  : currentPage * 9 -
                    numProducts +
                    numProducts -
                    9 * (pageCount - 1))
              } of ${numProducts} results`
            : `Showing ${numProducts} of ${numProducts} results`}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
