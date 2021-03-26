import React, { useEffect } from "react";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Product from "../components/product/Product";
import Loader from "../components/Loader";
const ShopPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading } = product;
  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  return (
    <div className="h-screen">
      {loading === "loading" ? (
        <Loader size={"w-24"} caption={true} />
      ) : (
        <div className="w-full lg:w-5/6 mx-auto ">
          <Breadcrumb className="mx-auto max-w-max bg-opacity-0">
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
          <div className="flex space-x-3">
            {products.map((p, i) => (
              <Product key={i} p={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
