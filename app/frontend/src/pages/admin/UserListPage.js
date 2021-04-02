import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import userActions from "../../redux/actions/user.actions";

const UserListPage = () => {
  const users = useSelector((state) => state.user.users);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, [dispatch]);
  return (
    <div class="overflow-x-auto">
      {loading === "loading" ? (
        <Loader />
      ) : (
        <div class="min-w-screen bg-gray-100 flex items-center justify-center font-sans">
          <div class="w-full lg:w-11/12">
            <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Manage Products</Breadcrumb.Item>
            </Breadcrumb>
            <div class="bg-white shadow-md rounded mb-4">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Id</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Admin</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {users.map((u) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">{u._id}</td>
                      <td className="py-3 px-6 text-left">{u.name}</td>
                      <td className="py-3 px-6 text-left">{u.email}</td>
                      <td className="py-3 px-6 text-left">
                        <i
                          className={
                            u.role === "admin"
                              ? "fas fa-check fa-2x text-success"
                              : "fas fa-times fa-2x text-danger"
                          }
                        ></i>
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
export default UserListPage;
