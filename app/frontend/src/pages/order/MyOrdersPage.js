import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import userActions from "../../redux/actions/user.actions";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";
// import Searchbar from "../../components/layout/SearchBar";

const MyOrdersPage = () => {
  // const keywords = useParams().keywords;
  const user = useSelector((state) => state.user);
  const { loading, userInfo, myOrders } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getUserOrders(userInfo._id));
  }, [dispatch, userInfo]);

  return (
    <div className="overflow-x-auto">
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div className="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-11/12">
            <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>My Orders</Breadcrumb.Item>
            </Breadcrumb>

            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Order Date</th>
                    <th className="py-3 px-6 text-left">Customer</th>
                    <th className="py-3 px-6 text-center">Products</th>
                    <th className="py-3 px-6 text-center">Shipping</th>
                    <th className="py-3 px-6 text-center">Total</th>
                    <th className="py-3 px-6 text-center">Payment method</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {myOrders.map((o) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
                            <Moment format="DD-MM-YYYY">{o.createdAt}</Moment>
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{o.userId.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
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
                          <span className="font-medium">{o.paymentMethod}</span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
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
                          <tr>
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

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div
                            // onClick={() =>
                            //   dispatch(productActions.deleteProduct(o._id))
                            // }
                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
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
export default MyOrdersPage;
