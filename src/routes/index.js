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
import Artists from './Artists';
import Leagues from './Leagues';
import Dashboard from './Dashboard';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateArtist from './Artists/CreateArtist';

import Layout from '../components/Layout';

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
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artists" exact component={Artists} />
        <PrivateRoute path="/artists/new" exact component={CreateArtist} />
        <Route path="/leagues" exact component={Leagues} />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Layout>
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
