import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { branch, renderComponent, compose } from 'recompose';

import Nav from './Nav';
import Logo from './Logo';
import Link from './Link';
import List from './List';
import ListItem from './ListItem';
import Content from './Content';
import Buttons from './Buttons';
import Container from './Container';
import SearchBar from './SearchBar';
import ToggleIcon from './ToggleIcon';

import query from '../../../queries/currentUser';
import { loggedOutItems, loggedInItems } from '../../../data/menuItems';

const logoutClick = e => {
  e.preventDefault();

  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');

  window.location.href = '/';
};

const Navbar = ({ toggleSidebar, children, auth }) => (
  <Nav>
    <Container>
      <ToggleIcon toggleSidebar={toggleSidebar} />
      <Logo to="/">Battle Rap Fix</Logo>
      <Content>
        {auth ? (
          <List>
            {loggedInItems.map(({ text, url }) => (
              <ListItem key={text} text={text} url={url} />
            ))}
          </List>
        ) : (
          <List>
            {loggedOutItems.map(({ text, url }) => (
              <ListItem key={text} text={text} url={url} />
            ))}
          </List>
        )}
        <SearchBar placeholder="Search for artists, battles, leagues, events..." />
        <Buttons>{children}</Buttons>
      </Content>
    </Container>
  </Nav>
);

const NavbarLoggedOut = ({ toggleSidebar }) => (
  <Navbar auth={false} toggleSidebar={toggleSidebar}>
    <Link to="/login">Log in</Link>
    <Link to="/register">Sign up</Link>
  </Navbar>
);

const NavbarLoggedIn = ({ toggleSidebar }) => (
  <Navbar auth toggleSidebar={toggleSidebar}>
    <Link to="/" onClick={logoutClick}>
      Log out
    </Link>
  </Navbar>
);

const branchComponent = branch(
  props => props.data.error || props.data.loading,
  renderComponent(NavbarLoggedOut)
);

Navbar.propTypes = {
  auth: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

NavbarLoggedOut.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

NavbarLoggedIn.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

const data = graphql(query);

export default compose(data, branchComponent)(NavbarLoggedIn);
