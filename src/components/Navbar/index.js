import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, graphql } from 'react-apollo';

import Nav from './Nav';
import Brand from './Brand';
import List from './List';
import ListItem from './ListItem';
import Collapse from './Collapse';
import Container from './Container';

import query from '../../queries/currentUser';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logout = e => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      props.client.resetStore();
      window.location.href = '/';
    };
  }

  renderLoggedIn = () => {
    const LoggedInMenuItems = [
      {
        text: 'Dashboard',
        url: '/dashboard',
      },
    ];

    return (
      <Nav>
        <Container>
          <Brand to="/">Battle Rap Fix</Brand>
          <Collapse>
            <List>
              {LoggedInMenuItems.map(({ text, url }) => (
                <ListItem key={text} text={text} url={url} />
              ))}
              <li>
                <button onClick={this.logout}>Logout</button>
              </li>
            </List>
          </Collapse>
        </Container>
      </Nav>
    );
  };

  renderLoggedOut = () => {
    const LoggedOutMenuItems = [
      {
        text: 'Register',
        url: '/register',
      },
      {
        text: 'Login',
        url: '/login',
      },
    ];

    return (
      <Nav>
        <Container>
          <Brand to="/">Battle Rap Fix</Brand>
          <Collapse>
            <List>
              {LoggedOutMenuItems.map(({ text, url }) => (
                <ListItem key={text} text={text} url={url} />
              ))}
            </List>
          </Collapse>
        </Container>
      </Nav>
    );
  };

  render() {
    const { error, loading, currentUser } = this.props;

    if (error || loading) {
      return this.renderLoggedOut();
    } else if (currentUser) {
      return this.renderLoggedIn();
    }
    return this.renderLoggedOut();
  }
}

Navbar.defaultProps = {
  error: undefined,
  currentUser: undefined,
};

Navbar.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any),
  client: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withApollo(
  graphql(query, {
    props: ({ data: { error, loading, currentUser } }) => ({
      error,
      loading,
      currentUser,
    }),
  })(Navbar)
);
