import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import orderActions from "../../redux/actions/order.actions";
import Pagination from "../../components/Pagination";

import Moment from "react-moment";
import moment from "moment";
// import Searchbar from "../../components/layout/SearchBar";

const OrderListPage = ({ isNew }) => {
  // const keywords = useParams().keywords;
  const order = useSelector((state) => state.order);
  const { loading } = order;
  const { orderList } = order;

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    dispatch(orderActions.getAllOrders(selectedPage + 1));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === "idle") dispatch(orderActions.getAllOrders());
  }, [dispatch, loading]);

  return (
    <div className="overflow-x-auto">
      {loading === "loading" || loading === "idle" ? (
        <Loader />
      ) : (
        <>
          {isNew && (
            <div className="text-xl text-red-600 animate-pulse font-bold py-2 bg-red-200 p2 text-center">
              New orders
            </div>
          )}
          <div className="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans">
            <div className="w-full">
              {/* <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Manage Orders</Breadcrumb.Item>
            </Breadcrumb> */}
              <div className="bg-white shadow-md rounded my-2">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Created At</th>
                      <th className="py-3 px-6 text-left">Customer</th>
                      <th className="py-3 px-6 text-left">Products</th>
                      <th className="py-3 px-6 text-left">Shipping</th>
                      <th className="py-3 px-6 text-left">Total</th>
                      <th className="py-3 px-6 text-left">Payment</th>
                      <th className="py-3 px-6 text-left">Status</th>
                      <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 text-sm font-light">
                    {isNew
                      ? orderList
                          .filter(
                            (o) =>
                              moment(o.createdAt).format("DD-MM-YYYY") ===
                              moment().format("DD-MM-YYYY")
                          )
                          .map((o) => (
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">
                                    <Moment format="DD-MM-YYYY">
                                      {o.createdAt}
                                    </Moment>
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                  <span>
                                    {o.userId && o.userId.name
                                      ? o.userId.name
                                      : "Anonymous (Guest)"}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">
                                    {Object.values(
                                      o.products.reduce((obj, product) => {
                                        let k = `${product.name}`;
                                        if (!obj[k])
                                          obj[k] = { ...product, count: 1 };
                                        else obj[k].count += 1;
                                        return obj;
                                      }, {})
                                    ).map((p) => (
                                      <tr>{`${p.name} (x${p.count})`}</tr>
                                    ))}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
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
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                  <table>
                                    <tr>
                                      &#8363;
                                      {o.total}
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">
                                    {o.paymentMethod}
                                  </span>
                                </div>
                              </td>

                              <td className="py-3 px-6 text-left">
                                <table>
                                  <tr className="mb-2 flex">
                                    {o.isPaid ? (
                                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                        Paid
                                      </span>
                                    ) : (
                                      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        Not Paid
                                      </span>
                                    )}
                                  </tr>
                                  <tr className="mb-2 flex">
                                    {o.isSent ? (
                                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                        Sent
                                      </span>
                                    ) : (
                                      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        Not Sent
                                      </span>
                                    )}
                                  </tr>
                                  <tr className="mb-2 flex">
                                    {o.isDelivered ? (
                                      <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                        Delivered
                                      </span>
                                    ) : (
                                      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                        Not Delivered
                                      </span>
                                    )}
                                  </tr>
                                </table>
                              </td>

                              <td className="py-3 px-6 text-left">
                                <div className="flex flex-col item-center justify-center">
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
                                </div>
                              </td>
                            </tr>
                          ))
                      : orderList.map((o) => (
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  <Moment format="DD-MM-YYYY">
                                    {o.createdAt}
                                  </Moment>
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
                                <span>
                                  {o.userId && o.userId.name
                                    ? o.userId.name
                                    : "Anonymous (Guest)"}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {Object.values(
                                    o.products.reduce((obj, product) => {
                                      let k = `${product.name}`;
                                      if (!obj[k])
                                        obj[k] = { ...product, count: 1 };
                                      else obj[k].count += 1;
                                      return obj;
                                    }, {})
                                  ).map((p) => (
                                    <tr>{`${p.name} (x${p.count})`}</tr>
                                  ))}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
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
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
                                <table>
                                  <tr>
                                    &#8363;
                                    {o.total}
                                  </tr>
                                </table>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                              <div className="flex items-center">
                                <span className="font-medium">
                                  {o.paymentMethod}
                                </span>
                              </div>
                            </td>

                            <td className="py-3 px-6 text-left">
                              <table>
                                <tr className="mb-2 flex">
                                  {o.isPaid ? (
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                      Paid
                                    </span>
                                  ) : (
                                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                      Not Paid
                                    </span>
                                  )}
                                </tr>
                                <tr className="mb-2 flex">
                                  {o.isSent ? (
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                      Sent
                                    </span>
                                  ) : (
                                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                      Not Sent
                                    </span>
                                  )}
                                </tr>
                                <tr className="mb-2 flex">
                                  {o.isDelivered ? (
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                      Delivered
                                    </span>
                                  ) : (
                                    <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                      Not Delivered
                                    </span>
                                  )}
                                </tr>
                              </table>
                            </td>

                            <td className="py-3 px-6 text-left">
                              <div className="flex flex-col item-center justify-center">
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
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                <Pagination handlePageClick={handlePageClick} type={"order"} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default OrderListPage;
