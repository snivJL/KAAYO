import React, { useEffect } from "react";
import productActions from "../redux/actions/product.actions";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import Loader from "../components/Loader";
import CategoriesPanel from "../components/Header/CategoriesPanel";

const ShopPage = () => {
  const cat = useParams().cat;
  const keywords = useParams().keyword;

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
        <Loader size={"w-24"} caption={true} />
      ) : (
        <>
          <CategoriesPanel />
          <div className="container-md mx-auto bg-white">
            <div className="w-full lg:w-5/6 mx-auto py-4">
              <Breadcrumb
                className="mr-auto max-w-max bg-transparent pb-4"
                bsPrefix="breadcrumb-item"
              >
                <LinkContainer to="/">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>Shop</Breadcrumb.Item>
              </Breadcrumb>
              {console.log(!cat && !keywords)}
              <div className="flex flex-wrap items-center">
                {cat || keywords
                  ? filteredProducts.map((p, i) => <Product key={i} p={p} />)
                  : products.map((p, i) => <Product key={i} p={p} />)}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShopPage;
