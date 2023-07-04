import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

type routeProps = {
  component: React.ElementType;
  isAuthenticated: Boolean;
  to: string;
  path: string;
};

const RouteComponent = ({
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

RouteComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

RouteComponent.defaultProps = {
  to: "/",
};

export default RouteComponent;
