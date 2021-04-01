import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = auth;
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !isAuthenticated && !loading ? (
            <Redirect to="/login" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
