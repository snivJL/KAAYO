import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/layout/Loader";
import { Link, useParams } from "react-router-dom";
import productActions from "../../redux/actions/product.actions";
import EditProductModal from "./EditProductModal";
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
    <div class="overflow-x-auto">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div class="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div class="w-full lg:w-5/6">
            <div class="bg-white shadow-md rounded my-6">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left">Name</th>
                    <th class="py-3 px-6 text-left">Description</th>
                    <th class="py-3 px-6 text-center">Price</th>
                    <th class="py-3 px-6 text-center">Ingredients</th>
                    <th class="py-3 px-6 text-center">Categories</th>
                    <th class="py-3 px-6 text-center">Stock</th>
                    {/* <th class="py-3 px-6 text-center">Status</th> */}
                    <th class="py-3 px-6 text-center">Images</th>
                    <th class="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  {products.map((p) => (
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{p.name}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <span>{p.description.slice(0, 12)}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{p.price}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <table>
                            {p.ingredients.map((i) => (
                              <tr>{i}</tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <table>
                            {p.category.map((cat) => (
                              <tr>{cat}</tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap">
                        <div class="flex items-center">
                          <span class="font-medium">{p.countInStock}</span>
                        </div>
                      </td>

                      {/* <td class="py-3 px-6 text-center">
                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          {p.status}
                        </span>
                      </td> */}
                      <td class="py-3 px-6 text-center">
                        <div class="flex items-center justify-center">
                          {p.images.map((img) => (
                            <img
                              class="w-12 h-12 rounded-full border-gray-200 border transform hover:scale-150"
                              src={img.imageUrl}
                              alt=""
                            />
                          ))}
                        </div>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div
                            onClick={() =>
                              dispatch(productActions.deleteProduct(p._id))
                            }
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
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
                                stroke-width="2"
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
