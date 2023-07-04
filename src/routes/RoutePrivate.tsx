import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

type routeProps = {
    component: React.ElementType;
    isAuthenticated: Boolean;
    to: string;
    path: string;
};

const RoutePrivate = ({component: Component, isAuthenticated, to, ...rest}: routeProps) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: {redirect: props.location.pathname, isAuthenticated}
          }}
        />
      )
    }
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  location: PropTypes.object,
  to: PropTypes.string
};

RoutePrivate.defaultProps = {
  to: '/'
};

export default RoutePrivate;
