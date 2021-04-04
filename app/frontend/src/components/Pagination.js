import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../redux/actions/product.actions";
const Pagination = ({ handlePageClick }) => {
  const dispatch = useDispatch();
  const pageCount = useSelector((state) => state.product.pageCount);
  const filterFlag = useSelector((state) => state.product.filterFlag);
  const filteredPageCount = useSelector(
    (state) => state.product.filteredPageCount
  );

  return (
    <ReactPaginate
      previousLabel={<i className="fas fa-angle-double-left"></i>}
      nextLabel={<i className="fas fa-angle-double-right"></i>}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={filterFlag ? filteredPageCount : pageCount}
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
