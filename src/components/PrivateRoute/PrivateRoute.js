import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props =>
        (loggedInUser.name || sessionStorage.getItem("token")) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;