import api from "../api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";

const productActions = {};

productActions.getAllProducts = (keywords = "", page = 1, cat = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    const { data } = await api.get(
      `/product?search=${keywords}&page=${page}&cat=${cat}`
    );
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_PRODUCTS_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.getFilteredProducts = (
  keywords = "",
  page = 1,
  cat = ""
) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_FILTERED_PRODUCTS_REQUEST });
    const { data } = await api.get(
      `/product?search=${keywords}&page=${page}&cat=${cat}`
    );
    dispatch({
      type: types.GET_FILTERED_PRODUCTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_FILTERED_PRODUCTS_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST });
    const { data } = await api.get(`/product/${id}`);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.createProduct = (product) => async (dispatch) => {
  // product.ingredients = product.ingredients.split(",");

  try {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST });
    const { data } = await api.post("/product/add", product);
    dispatch({ type: types.CREATE_PRODUCT_SUCCESS, payload: data });
    toast.info("Product created!");
  } catch (error) {
    console.error(error);
    toast.dark(error.errors.message);
    dispatch({
      type: types.CREATE_PRODUCT_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST });
    await api.delete(`/product/${productId}/delete`);
    dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: productId });
    toast.success("Product deleted!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.DELETE_PRODUCT_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.restoreProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: types.RESTORE_PRODUCT_REQUEST });
    await api.put(`/product/${productId}/restore`);
    dispatch({ type: types.RESTORE_PRODUCT_SUCCESS, payload: productId });
    toast.success("Product restored!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.RESTORE_PRODUCT_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.editProduct = (productId, product) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_PRODUCT_REQUEST });
    const { data } = await api.put(`/product/${productId}/update`, product);
    dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: data.data });
    toast.success("Product edited!");
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.EDIT_PRODUCT_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.getDeletedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DELETED_PRODUCTS_REQUEST });
    const { data } = await api.get(`/product/admin/deleted`);
    dispatch({
      type: types.GET_DELETED_PRODUCTS_SUCCESS,
      payload: data.data.products,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_DELETED_PRODUCTS_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

productActions.createReview = (review, productId) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_REVIEW_REQUEST });
    const { data } = await api.post(`/product/${productId}/reviews`, review);
    console.log("DATA", data);
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: data.data.product });
  } catch (error) {
    console.error(error);
    toast.dark(
      error && error.errors && error.errors.message
        ? error.errors.message
        : error
    );
    dispatch({
      type: types.CREATE_REVIEW_FAIL,
      payload:
        error && error.errors && error.errors.message
          ? error.errors.message
          : error,
    });
  }
};

export default productActions;
