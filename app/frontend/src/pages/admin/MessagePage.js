import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";
import messageActions from "../../redux/actions/message.actions";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";
import MessageDetailModal from "./MessageDetailModal";
// import Searchbar from "../../components/layout/SearchBar";

const MessagePage = () => {
  const keywords = useParams().keywords;
  const message = useSelector((state) => state.message);
  const { loading, messages } = message;
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === "idle") dispatch(messageActions.getAllMessages());
  }, [dispatch, loading]);

  return (
    <div className="overflow-x-auto">
      {loading === "loading" || loading === "idle" ? (
        <Loader />
      ) : (
        <div className="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <Breadcrumb className="mx-auto max-w-max bg-opacity-0">
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Message List</Breadcrumb.Item>
            </Breadcrumb>
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Created At</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Message</th>
                    <th className="py-3 px-6 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {messages.map((m) => (
                    <tr
                      className={`border-b border-gray-200 hover:bg-gray-100 transition ease ${
                        !m.isRead ? "font-medium" : ""
                      }`}
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="">
                            <Moment format="DD-MM-YYYY">{m.createdAt}</Moment>
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{m.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="">{m.email}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          {m.content.length > 20
                            ? m.content.slice(0, 20) + "..."
                            : m.content}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center ">
                          <MessageDetailModal message={m} />

                          <div
                            onClick={() =>
                              dispatch(messageActions.deleteMessage(m._id))
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
export default MessagePage;
