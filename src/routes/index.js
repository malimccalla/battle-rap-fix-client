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
import Navbar from '../components/Navbar';

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

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

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
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

PublicRoute.defaultProps = {
  location: undefined,
};

PrivateRoute.defaultProps = {
  location: undefined,
};

PublicRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  component: PropTypes.func.isRequired,
};

PrivateRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  component: PropTypes.func.isRequired,
};

export default Routes;
