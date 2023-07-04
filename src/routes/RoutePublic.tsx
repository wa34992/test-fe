import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

type routeProps = {
  component: React.ElementType;
  isAuthenticated: Boolean;
  to: string;
  path: string;
};

const RoutePublic = ({
  component: Component,
  isAuthenticated,
  to,
  path,
  ...rest
}: routeProps) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated ? <Redirect to={to} /> : <Component {...props} />
    }
  />
);

RoutePublic.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

RoutePublic.defaultProps = {
  to: "/",
};

export default RoutePublic;
