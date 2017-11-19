import React from 'react';
import decode from 'jwt-decode';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from './Home';
import Login from './auth/Login';
import Dashboard from './Dashboard';
import Register from './auth/Register';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
    </Switch>
  </Router>
);

PrivateRoute.defaultProps = {
  location: undefined,
};

PrivateRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  component: PropTypes.func.isRequired,
};

export default Routes;
