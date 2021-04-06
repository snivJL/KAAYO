import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Moment from "react-moment";
import couponActions from "../../redux/actions/coupon.actions";

const CouponListPage = () => {
  const coupons = useSelector((state) => state.coupon.coupons);
  // const selectedUser = useSelector((state) => state.user.selectedUser);
  const loading = useSelector((state) => state.coupon.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(couponActions.getAllCoupons());
  }, [dispatch]);
  return (
    <div class="overflow-x-auto">
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div class="min-w-screen bg-gray-100 flex items-center justify-center font-sans">
          <div class="w-full ">
            <div class="bg-white shadow-md rounded mb-4">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Description</th>
                    <th className="py-3 px-6 text-left">Discount</th>
                    <th className="py-3 px-6 text-left">From</th>
                    <th className="py-3 px-6 text-left">To</th>
                    <th className="py-3 px-6 text-left">Valid For</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {coupons.map((c) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">{c.name}</td>
                      <td className="py-3 px-6 text-left">{c.description}</td>
                      <td className="py-3 px-6 text-left">{c.discount}%</td>
                      <td className="py-3 px-6 text-left">
                        <Moment format="DD-MM-YYYY">{c.validFrom}</Moment>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <Moment format="DD-MM-YYYY">{c.validUntil}</Moment>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <table>
                            {c.categories.map((cat) => (
                              <tr>{cat}</tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td className="text-center">
                        <div
                          onClick={() =>
                            dispatch(couponActions.deleteCoupon(c._id))
                          }
                          className="w-4 mr-2 text-center transform hover:text-purple-500 hover:scale-110"
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
export default CouponListPage;
