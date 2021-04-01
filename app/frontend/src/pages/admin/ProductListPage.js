import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { Link, useParams } from "react-router-dom";
import productActions from "../../redux/actions/product.actions";
import EditProductModal from "./EditProductPage";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import Searchbar from "../../components/layout/SearchBar";

const ProductListPage = () => {
  const keywords = useParams().keywords;
  const products = useSelector((state) => state.product.products);
  const deletedProducts = useSelector((state) => state.product.deletedProducts);
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAllProducts(keywords));
  }, [dispatch, keywords]);

  return (
    <div className="overflow-x-auto">
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div className="min-w-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Manage Products</Breadcrumb.Item>
            </Breadcrumb>
            <div className="bg-white shadow-md rounded mb-4">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Description</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Ingredients</th>
                    <th className="py-3 px-6 text-center">Categories</th>
                    <th className="py-3 px-6 text-center">Stock</th>
                    {/* <th className="py-3 px-6 text-center">Status</th> */}
                    <th className="py-3 px-6 text-center">Images</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {products.map((p) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{p.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>
                            {p.description.length > 15
                              ? p.description.slice(0, 15) + "..."
                              : p.description}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{p.price}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <table>
                            {p.ingredients.map((i) => (
                              <tr>{i}</tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <table>
                            {p.category.map((cat) => (
                              <tr>{cat}</tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{p.countInStock}</span>
                        </div>
                      </td>

                      {/* <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          {p.status}
                        </span>
                      </td> */}
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          {p.images.map((img) => (
                            <img
                              className="w-12 h-12 rounded-full border-gray-200 border transform hover:scale-150"
                              src={img.imageUrl}
                              alt=""
                            />
                          ))}
                        </div>
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <Link to={`/admin/product/${p._id}/edit`}>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                          </Link>

                          <div
                            onClick={() =>
                              dispatch(productActions.deleteProduct(p._id))
                            }
                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
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
export default ProductListPage;
