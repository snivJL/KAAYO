import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../redux/actions/product.actions";
const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector((state) => state.product.pageCount);
  const handlePageClick = (e) => {
    dispatch(productActions.getAllProducts(e.selected + 1));
  };
  return (
    <ReactPaginate
      previousLabel={<i className="fas fa-chevron-left"></i>}
      nextLabel={<i className="fas fa-chevron-right"></i>}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
