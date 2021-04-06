import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../redux/actions/product.actions";
const Pagination = ({ handlePageClick, type = "product" }) => {
  const dispatch = useDispatch();
  const productPageCount = useSelector((state) => state.product.pageCount);
  const orderPageCount = useSelector((state) => state.order.pageCount);
  const filterFlag = useSelector((state) => state.product.filterFlag);
  const filteredPageCount = useSelector(
    (state) => state.product.filteredPageCount
  );

  return (
    <>
      {type === "product" ? (
        <ReactPaginate
          previousLabel={<i className="fas fa-angle-double-left"></i>}
          nextLabel={<i className="fas fa-angle-double-right"></i>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={filterFlag ? filteredPageCount : productPageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      ) : (
        <ReactPaginate
          previousLabel={<i className="fas fa-angle-double-left"></i>}
          nextLabel={<i className="fas fa-angle-double-right"></i>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={orderPageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default Pagination;
