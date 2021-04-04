import * as types from "../constants/product.constants";

const initialState = {
  loading: "idle",
  loadingPostReviews: "idle",
  products: [],
  filteredProducts: [],
  pageCount: 0,
  filterFlag: false,
  filteredPageCount: 0,
  numProducts: 0,
  deletedProducts: [],
  selectedProduct: {
    images: [{}],
    category: [],
    ingredients: [],
    reviews: [{}],
  },
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
    case types.GET_FILTERED_PRODUCTS_REQUEST:
    case types.GET_SINGLE_PRODUCT_REQUEST:
    case types.EDIT_PRODUCT_REQUEST:
    case types.DELETE_PRODUCT_REQUEST:
    case types.GET_DELETED_PRODUCTS_REQUEST:
      return { ...state, loading: "loading" };
    case types.CREATE_REVIEW_REQUEST:
      return { ...state, loadingPostReviews: "loading" };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        pageCount: payload.totalPages,
        numProducts: payload.totalProducts,
        filterFlag: false,
        loading: "succeeded",
      };
    case types.GET_FILTERED_PRODUCTS_SUCCESS:
      return {
        ...state,
        filteredProducts: payload.products,
        filteredPageCount: payload.totalPages,
        numProducts: payload.totalProducts,
        filterFlag: true,
        loading: "succeeded",
      };
    case types.GET_DELETED_PRODUCTS_SUCCESS:
      return { ...state, deletedProducts: payload, loading: "succeeded" };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: payload, loading: "succeeded" };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((p) => p._id !== payload),
        loading: "succeeded",
      };
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((p) => {
          if (p._id === payload._id) return payload;
          else return p;
        }),
        loading: "succeeded",
      };
    case types.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loadingPostReviews: "succeeded",
        selectedProduct: payload,
      };

    case types.GET_PRODUCTS_FAIL:
    case types.GET_FILTERED_PRODUCTS_FAIL:
    case types.GET_SINGLE_PRODUCT_FAIL:
    case types.DELETE_PRODUCT_FAIL:
    case types.GET_DELETED_PRODUCTS_FAIL:
    case types.EDIT_PRODUCT_FAIL:
      return { ...state, loading: "failed", error: payload };
    case types.CREATE_REVIEW_FAIL:
      return { ...state, loadingPostReviews: "failed", error: payload };

    default:
      return state;
  }
};

export default productReducer;
