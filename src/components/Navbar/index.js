import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Nav from './Nav';
import Brand from './Brand';
import List from './List';
import ListItem from './ListItem';
import Collapse from './Collapse';
import Container from './Container';

import query from '../../queries/currentUser';

class Navbar extends Component {
  onLogoutClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.props.data.refetch();
    console.log('Refetch', this.props.data);
  };

  render() {
    const { data: { loading, user } } = this.props;

    const LoggedInMenuItems = [
      {
        text: 'Dashboard',
        url: '/dashboard',
      },
    ];
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
          {!loading ? (
            <Collapse>
              {user ? (
                <List>
                  {LoggedInMenuItems.map(({ text, url }) => (
                    <ListItem key={text} text={text} url={url} />
                  ))}
                  <li>
                    <button onClick={this.onLogoutClick}>Logout</button>
                  </li>
                </List>
              ) : (
                <List>
                  {LoggedOutMenuItems.map(({ text, url }) => (
                    <ListItem key={text} text={text} url={url} />
                  ))}
                  <li>
                    <button onClick={this.onLogoutClick}>Logout</button>
                  </li>
                </List>
              )}
            </Collapse>
          ) : null}
        </Container>
      </Nav>
    );
  }
}

Navbar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Navbar);
