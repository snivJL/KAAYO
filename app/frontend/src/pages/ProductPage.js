import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Card, ListGroup, Form, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/actions/product.actions";
import { LinkContainer } from "react-router-bootstrap";
import dryImage from "../images/dry-skin.png";
import oilyImage from "../images/oily-skin.png";
import sensitiveImage from "../images/sensitive-skin.png";
import Loader from "../components/Loader";
import Rating from "../components/product/Rating";
// import ImagesCarousel from "../components/products/ImagesCarousel";
import AddToCartButton from "../components/AddToCartButton";
import ReviewList from "../components/review/ReviewList";
import ReviewInput from "../components/review/ReviewInput";

const ProductPage = () => {
  const reviewsRef = useRef();
  const [showReviews, setShowReviews] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [qty, setQty] = useState(1);
  const productId = useParams().id;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  // const images = useSelector((state) => state.product.selectedProduct.images);
  const category = useSelector(
    (state) => state.product.selectedProduct.category
  );

  useEffect(() => {
    dispatch(productActions.getSingleProduct(productId));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading === "loading" ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="bg-white md:px-12 min-w-screen w-11/12 mx-auto pb-6">
          <Breadcrumb
            className="mr-auto max-w-max text-gray-700 bg-transparent py-2"
            bsPrefix="breadcrumb-item"
          >
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Breadcrumb.Item>Shop</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{category[0]}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="flex flex-col items-center w-full md:flex-row md:items-start md:space-x-12 text-gray-700">
            <div className="md:w-1/2">
              <img src={product.images[0].imageUrl} alt="" />
            </div>
            <div className="flex flex-col items-center md:items-start md:w-1/2">
              <div className="text-xl font-bold pb-4 w-full relative">
                {product.productCollection && (
                  <div className="absolute w-max left-3/4 italic font-medium p-2 border bg-gray-200 rounded-full">
                    {product.productCollection}
                  </div>
                )}
                {product.name}
              </div>
              <div className="text-lg italic pb-4">{product.category[0]}</div>
              <div
                onClick={() =>
                  reviewsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="pb-4"
              >
                <Rating
                  value={product.rating}
                  numReviews={product.numReviews}
                />
              </div>
              <div className="pb-4 font-bold">
                {product.shortDesc ? product.shortDesc : "Short Description"}
              </div>
              <div className="pb-4">{product.description}</div>
              <div className="font-bold mb-2">Recommended For</div>
              <div className="flex items-center mb-4 w-full justify-between">
                <div
                  className={`flex items-center relative  ${
                    product.target === "Dry Skin"
                      ? "border px-2 pt-2 pb-3 bg-gray-300"
                      : "opacity-50"
                  }`}
                >
                  <img className="w-10 pr-2" src={dryImage} alt="" /> Dry skin
                  {product.target === "Dry Skin" && (
                    <i class="far fa-check-circle absolute left-1/2 bottom-0 mb-1text-green-600"></i>
                  )}
                </div>
                <div
                  className={`flex items-center relative  ${
                    product.target === "Oily Skin"
                      ? "border px-2 pt-2 pb-3 bg-gray-300"
                      : "opacity-50"
                  }`}
                >
                  <img className="w-10 pr-2" src={oilyImage} alt="" /> Oily skin
                  {product.target === "Oily Skin" && (
                    <i class="far fa-check-circle absolute left-1/2 bottom-0 mb-1 text-green-600"></i>
                  )}
                </div>
                <div
                  className={`flex items-center relative  ${
                    product.target === "Sensitive Skin"
                      ? "border px-2 pt-2 pb-3 bg-gray-300"
                      : "opacity-50"
                  }`}
                >
                  <img className="w-10 pr-2" src={sensitiveImage} alt="" />{" "}
                  Sensitive skin
                  {product.target === "Sensitive Skin" && (
                    <i class="far fa-check-circle absolute left-1/2 bottom-0 mb-1 text-green-600"></i>
                  )}
                </div>
              </div>

              <div className="font-bold mb-2 ">Ingredients</div>
              {/* <ul className="flex flex-wrap items-center space-x-3 space-y-2 mb-4"> */}
              <ul className="grid grid-cols-3 gap-2 justify-center place-content-center	 items-center mb-4">
                {/* <ul className="grid grid-cols-4 mb-4"> */}
                {product.ingredients.map((i, index) => (
                  <li
                    className="capitalize text-center px-3 py-1 bg-green-200 text-green-800 rounded-full"
                    key={index}
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <Card className="w-full pb-4 md:w-5/6">
                <ListGroup flush>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>&#8363;{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity:</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          disabled={product.countInStock === 0}
                          value={qty}
                          onChange={(e) => setQty(parseInt(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AddToCartButton qty={qty} product={product} />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
          <div className="flex justify-between w-full">
            {product.reviews.length ? (
              <div className="flex  py-5">
                <button
                  ref={reviewsRef}
                  onClick={() => setShowReviews(!showReviews)}
                  className="border-b-2 border-green-500  font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
                >
                  Reviews {product.reviews.length}{" "}
                  {showReviews ? "(hide)" : "(show)"}
                </button>
              </div>
            ) : (
              <p className="border-b-2 border-green-500  font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white">
                No reviews Yet
              </p>
            )}
            <div className="flex  py-5">
              <button
                ref={reviewsRef}
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="border-b-2 border-green-500  font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
              >
                Write review
              </button>
            </div>
          </div>

          <div className={!showReviews ? "d-none" : ""}>
            <ReviewList reviews={product.reviews} />
          </div>
          <div className={!showReviewForm ? "d-none" : "pt-8"}>
            <ReviewInput reviews={product.reviews} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
