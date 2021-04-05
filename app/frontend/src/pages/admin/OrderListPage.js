import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import orderActions from "../../redux/actions/order.actions";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";
// import Searchbar from "../../components/layout/SearchBar";

const OrderListPage = () => {
  // const keywords = useParams().keywords;
  const order = useSelector((state) => state.order);
  const { loading } = order;
  const { orderList } = order;

  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === "idle") dispatch(orderActions.getAllOrders());
  }, [dispatch, loading]);

  return (
    <div class="overflow-x-auto">
      {loading === "loading" || loading === "idle" ? (
        <Loader />
      ) : (
        <div class="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans">
          <div class="w-full">
            {/* <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Manage Orders</Breadcrumb.Item>
            </Breadcrumb> */}
            <div class="bg-white shadow-md rounded my-2">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">Created At</th>
                    <th class="py-3 px-6 text-left">Customer</th>
                    <th class="py-3 px-6 text-left">Products</th>
                    <th class="py-3 px-6 text-left">Shipping</th>
                    <th class="py-3 px-6 text-left">Total</th>
                    <th class="py-3 px-6 text-left">Payment</th>
                    <th class="py-3 px-6 text-left">Status</th>
                    <th class="py-3 px-6 text-left">Action</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  {orderList.map((o) => (
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">
                            <Moment format="DD-MM-YYYY">{o.createdAt}</Moment>
                          </span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <span>
                            {o.userId && o.userId.name
                              ? o.userId.name
                              : "Anonymous (Guest)"}
                          </span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">
                            {Object.values(
                              o.products.reduce((obj, product) => {
                                let k = `${product.name}`;
                                if (!obj[k]) obj[k] = { ...product, count: 1 };
                                else obj[k].count += 1;
                                return obj;
                              }, {})
                            ).map((p) => (
                              <tr>{`${p.name} (x${p.count})`}</tr>
                            ))}
                          </span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <table>
                            <tr>{o.shipping.address}</tr>
                            <tr>{o.shipping.city}</tr>
                            <tr>{o.shipping.district}</tr>
                            <tr>{o.shipping.ward}</tr>
                            <tr>{o.shipping.postalCode}</tr>
                            <tr>{o.shipping.country}</tr>
                          </table>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <table>
                            <tr>
                              &#8363;
                              {o.total}
                            </tr>
                          </table>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{o.paymentMethod}</span>
                        </div>
                      </td>

                      <td class="py-3 px-6 text-left">
                        <table>
                          <tr className="mb-2 flex">
                            {o.isPaid ? (
                              <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                Paid
                              </span>
                            ) : (
                              <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                Not Paid
                              </span>
                            )}
                          </tr>
                          <tr className="mb-2 flex">
                            {o.isSent ? (
                              <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                Sent
                              </span>
                            ) : (
                              <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                Not Sent
                              </span>
                            )}
                          </tr>
                          <tr className="mb-2 flex">
                            {o.isDelivered ? (
                              <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                Delivered
                              </span>
                            ) : (
                              <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                Not Delivered
                              </span>
                            )}
                          </tr>
                        </table>
                      </td>

                      <td class="py-3 px-6 text-left">
                        <div class="flex flex-col item-center justify-center">
                          <div className="flex justify-between items-center">
                            <label>Mark as Paid</label>
                            <input
                              className="mb-2"
                              type="checkbox"
                              checked={o.isPaid}
                              onChange={() =>
                                dispatch(
                                  orderActions.updateOrder({
                                    id: o._id,
                                    isPaid: !o.isPaid,
                                  })
                                )
                              }
                              name="paid"
                            />
                          </div>

                          <div className="flex justify-between items-center">
                            <label>Mark as Sent</label>
                            <input
                              className="mb-2"
                              type="checkbox"
                              checked={o.isSent}
                              onChange={() =>
                                dispatch(
                                  orderActions.updateOrder({
                                    id: o._id,
                                    isSent: !o.isSent,
                                  })
                                )
                              }
                              name="sent"
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <label>Mark as Delivered</label>
                            <input
                              className="mb-2"
                              type="checkbox"
                              checked={o.isDelivered}
                              onChange={() =>
                                dispatch(
                                  orderActions.updateOrder({
                                    id: o._id,
                                    isDelivered: !o.isDelivered,
                                  })
                                )
                              }
                              name="delivered"
                            />
                          </div>
                          {/* <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div
                            // onClick={() =>
                            //   dispatch(productActions.deleteProduct(o._id))
                            // }
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default OrderListPage;
