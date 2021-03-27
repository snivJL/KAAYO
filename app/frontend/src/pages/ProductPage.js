import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Container,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../redux/actions/product.actions";
import { LinkContainer } from "react-router-bootstrap";

import Loader from "../components/Loader";
import Rating from "../components/product/Rating";
// import ImagesCarousel from "../components/products/ImagesCarousel";
import AddToCartButton from "../components/AddToCartButton";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const productId = useParams().id;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const images = useSelector((state) => state.product.selectedProduct.images);
  const category = useSelector(
    (state) => state.product.selectedProduct.category
  );

  useEffect(() => {
    if (loading === "idle")
      dispatch(productActions.getSingleProduct(productId));
  }, [dispatch, productId, loading]);

  return (
    <>
      {loading === "loading" ? (
        <>
          {console.log("loading")}
          <Loader />
        </>
      ) : (
        <Container>
          <Breadcrumb className="mx-auto max-w-max bg-opacity-0">
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Breadcrumb.Item>Shop</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{category[0]}</Breadcrumb.Item>
          </Breadcrumb>
          <Link className="btn btn-light my-3 " to="/">
            <i class="far fa-arrow-alt-circle-left"></i> Back
          </Link>
          <Row>
            <Col md={6}>
              <img src={product.images[0].imageUrl} alt="" />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="py-2 text-gray-500">
                    &#8363;
                    <span className="text-lg">{product.price}</span>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={product.rating} />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
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
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
