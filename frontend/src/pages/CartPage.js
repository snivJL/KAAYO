import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Alert,
  ListGroup,
  Image,
  Card,
  Button,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import orderActions from "../redux/actions/order.actions";

const CartPage = () => {
  const productId = useParams();
  const history = useHistory();
  const cart = useSelector((state) => state.order.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const checkoutHandler = (e) => {
    e.preventDefault();
    isAuthenticated ? history.push("/shipping") : history.push("/login");
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell"></th>
                <th className="text-left">Product</th>
                <th className="text-left">
                  <span className="lg:hidden" title="Quantity">
                    Qtd
                  </span>
                  <span className="hidden lg:inline">Quantity</span>
                </th>
                <th className="hidden text-left md:table-cell">Unit price</th>
                <th className="text-center">Total price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr className="items-center justify-center">
                  <td className="text-center">
                    <a href="/">
                      <img
                        src={item.product.images[0].imageUrl}
                        className="w-20 rounded"
                        alt="Thumbnail"
                      />
                    </a>
                  </td>
                  <td>
                    <a href="/">
                      <p className="mb-2 md:ml-4">{item.product.name}</p>
                      <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </a>
                  </td>
                  <td className="text-left">
                    <ButtonGroup>
                      <Button
                        size="sm"
                        variant="light"
                        onClick={() =>
                          dispatch(
                            orderActions.removeFromCart(undefined, item.product)
                          )
                        }
                        disabled={item.qty === 0}
                      >
                        -
                      </Button>
                      <Button size="md" variant="light" disabled>
                        {item.qty}
                      </Button>
                      <Button
                        size="sm"
                        variant="light"
                        onClick={() =>
                          dispatch(
                            orderActions.addToCart(undefined, item.product)
                          )
                        }
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td>
                    <span className="text-sm lg:text-base font-medium">
                      &#8363;
                      {item.product.price}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm lg:text-base font-medium">
                      &#8363;
                      {item.product.price * item.qty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
              </div>
              <div class="p-4">
                <p class="mb-4 italic">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div class="justify-center md:flex">
                  <form>
                    <div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                      <input
                        type="coupon"
                        name="code"
                        id="coupon"
                        placeholder="Apply coupon"
                        value=""
                        class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                      />
                      <button
                        type="submit"
                        class="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          class="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span class="font-medium">Apply coupon</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="p-4 mt-6 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
              </div>
              <div class="p-4">
                <p class="mb-4 italic">
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
              </div>
            </div>
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Order Details</h1>
              </div>
              <div class="p-4">
                <p class="mb-6 italic">
                  Shipping and additionnal costs are calculated based on values
                  you have entered
                </p>
                <div class="flex justify-between border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Subtotal
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    )}
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                    <form action="" method="POST">
                      <button type="submit" class="mr-2 mt-1 lg:mt-2">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          class="w-4 text-red-600 hover:text-red-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                      </button>
                    </form>
                    Coupon "90off"
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                    &#8363;0
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    )}
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Shipping
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    &#8363; 40000
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    &#8363;
                    {cart.reduce(
                      (acc, item) => acc + item.qty * item.product.price,
                      0
                    ) + 40000}
                  </div>
                </div>
                <a href="/">
                  <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      class="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span class="ml-2 mt-5px">Procceed to checkout</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Container>
    //   <Row className="pt-3">
    //     <Col md={8}>
    //       <h2>Shopping Cart</h2>
    //       {cart.length === 0 ? (
    //         <Alert>
    //           Your cart is empty <Link to="/">Go Back</Link>
    //         </Alert>
    //       ) : (
    //         <>
    //           <ListGroup>
    //             {cart.map((p) => (
    //               <ListGroup.Item key={p.product._id}>
    //                 <Row className="align-items-center">
    //                   <Col md={3}>
    //                     <Image
    //                       src={p.product.images[0].imageUrl}
    //                       alt={p.product.name}
    //                       fluid
    //                       rounded
    //                     />
    //                   </Col>
    //                   <Col md={3}>
    //                     <Link to={`/product${productId}`}>
    //                       {p.product.name}
    //                     </Link>
    //                   </Col>
    //                   <Col md={2}>
    //                     &#8363;
    //                     {p.product.price}
    //                   </Col>
    //                   <Col>
    //                     <ButtonGroup>
    //                       <Button
    //                         size="sm"
    //                         variant="light"
    //                         onClick={() =>
    //                           dispatch(
    //                             orderActions.removeFromCart(
    //                               undefined,
    //                               p.product
    //                             )
    //                           )
    //                         }
    //                         disabled={p.qty === 0}
    //                       >
    //                         -
    //                       </Button>
    //                       <Button size="md" variant="light" disabled>
    //                         {p.qty}
    //                       </Button>
    //                       <Button
    //                         size="sm"
    //                         variant="light"
    //                         onClick={() =>
    //                           dispatch(
    //                             orderActions.addToCart(undefined, p.product)
    //                           )
    //                         }
    //                       >
    //                         +
    //                       </Button>
    //                     </ButtonGroup>
    //                   </Col>
    //                   <Col>
    //                     <Button
    //                       onClick={() =>
    //                         dispatch(orderActions.deleteFromCart(p.product._id))
    //                       }
    //                       size="sm"
    //                       variant="light"
    //                     >
    //                       <i className="fas fa-trash"></i>
    //                     </Button>
    //                   </Col>
    //                 </Row>
    //               </ListGroup.Item>
    //             ))}
    //           </ListGroup>
    //         </>
    //       )}
    //     </Col>
    //     <Col md={4}>
    //       <Card className="py-2 px-4 mt-5">
    //         <ListGroup variant="flush">
    //           <h4>
    //             Subtotal ({cart.reduce((acc, item) => item.qty + acc, 0)}) items
    //           </h4>
    //           <div className="d-flex align-items-center px-3">
    //             <p>&#8363;</p>
    //             <h1>
    //               {cart.reduce(
    //                 (acc, item) => acc + item.qty * item.product.price,
    //                 0
    //               )}
    //             </h1>
    //           </div>
    //         </ListGroup>
    //         <ListGroup.Item>
    //           <Button
    //             type="button"
    //             onClick={(e) => checkoutHandler(e)}
    //             className="btn-block btn-warning"
    //             disabled={cart.length === 0}
    //           >
    //             Proceed to Checkout
    //           </Button>
    //         </ListGroup.Item>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};
export default CartPage;
