import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";
import productActions from "../../../../redux/actions/product.actions";
import { useDispatch, useSelector } from "react-redux";
// import usersData from './UsersData'

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const product = useSelector((state) => state.product);
  const { products } = product;
  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, [dispatch]);
  return (
    <CRow>
      <CCol xl={6}>
        <CCard>
          <CCardHeader>Products</CCardHeader>
          <CCardBody>
            <CDataTable
              items={products}
              fields={[
                { key: "name", _classes: "font-weight-bold" },
                "email",
                "phone",
                "role",
              ]}
              hover
              striped
              itemsPerPage={9}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/products/${item.id}`)}
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Products;
