import React, { useEffect } from "react";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import Loader from "../components/Loader";
import CategoriesPanel from "../components/Header/CategoriesPanel";
import Pagination from "../components/Pagination";

const ShopPage = () => {
  const cat = useParams().cat;
  const keywords = useParams().keyword;
  console.log(cat);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading, filteredProducts } = product;
  useEffect(() => {
    if (keywords) dispatch(productActions.getFilteredProducts(keywords));
    else if (!cat) dispatch(productActions.getAllProducts());
  }, [dispatch, cat, keywords]);
  return (
    <>
      {loading === "loading" ? (
        <Loader size={"w-56"} caption={true} />
      ) : (
        <>
          <CategoriesPanel />
          <div className="container-md mx-auto bg-white">
            <div className="w-full container-xl mx-auto py-4">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                {cat || keywords ? (
                  filteredProducts.length > 0 ? (
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
              <Pagination />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShopPage;
