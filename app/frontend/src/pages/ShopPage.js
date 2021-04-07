import React, { useEffect, useState } from "react";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import Loader from "../components/Loader";
// import CategoriesPanel from "../components/Header/CategoriesPanel";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

const ShopPage = () => {
  const cat = useParams().cat;
  const keywords = useParams().keyword;
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading, filteredProducts, filterFlag } = product;
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    dispatch(productActions.getAllProducts(undefined, selectedPage + 1));
  };
  useEffect(() => {
    // if (keywords) dispatch(productActions.getFilteredProducts(keywords));
    // else if (!cat) dispatch(productActions.getAllProducts());
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  return (
    <>
      {/* <CategoriesPanel /> */}
      <div className="hero-shop object-cover h-52 mb-12">
        <div className="container-md mx-auto flex items-center h-full">
          <div className="flex flex-col justify-around h-3/4">
            <h2 className="text-gray-600 font-light">Shop</h2>
            <Breadcrumb
              className="mr-auto max-w-max bg-transparent pb-4 "
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/shop">
                {cat ? (
                  <Breadcrumb.Item>Shop</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item active>Shop</Breadcrumb.Item>
                )}
              </LinkContainer>
              {cat && (
                <Breadcrumb.Item className="capitalize" active>
                  {cat.replace("-", " ")}
                </Breadcrumb.Item>
              )}
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container-md mx-auto bg-white ">
        <FilterBar currentPage={currentPage} />
        {loading === "loading" ? (
          <Loader size={"w-56"} caption={true} />
        ) : (
          <>
            <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
              {filterFlag ? (
                filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((p, i) => <Product key={i} p={p} />)
                ) : (
                  <h2>No results</h2>
                )
              ) : products.length > 0 ? (
                products.map((p, i) => <Product key={i} p={p} />)
              ) : (
                <h2>No results</h2>
              )}
            </div>
          </>
        )}
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </>
  );
};

export default ShopPage;
