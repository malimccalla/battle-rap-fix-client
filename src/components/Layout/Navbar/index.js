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

const logoutClick = e => {
  e.preventDefault();

  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');

  window.location.href = '/';
};

const NavbarLoggedOut = ({ toggleSidebar }) => (
  <Nav>
    <Container>
      <ToggleIcon toggleSidebar={toggleSidebar} />
      <Logo to="/">Battle Rap Fix</Logo>
      <Content>
        <List>
          <ListItem url="/" text="Home" />
          <ListItem url="/dashboard" text="Discover" />
        </List>
        <SearchBar placeholder="Search for artists, battles, leagues, events..." />
        <Buttons>
          <Link to="/login">Log in</Link>
          <Link to="/register">Sign up</Link>
        </Buttons>
      </Content>
    </Container>
  </Nav>
);

const NavbarLoggedIn = ({ toggleSidebar }) => (
  <Nav>
    <Container>
      <ToggleIcon toggleSidebar={toggleSidebar} />
      <Logo to="/">Battle Rap Fix</Logo>
      <Content>
        <List>
          <ListItem url="/" text="Home" />
          <ListItem url="/dashboard" text="Discover" />
        </List>
        <SearchBar placeholder="Search for artists, battles, leagues, events..." />
        <Buttons>
          <Link to="/" onClick={logoutClick}>
            Log out
          </Link>
        </Buttons>
      </Content>
    </Container>
  </Nav>
);

const branchComponent = branch(
  props => props.data.error || props.data.loading,
  renderComponent(NavbarLoggedOut)
);

NavbarLoggedOut.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

NavbarLoggedIn.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

const data = graphql(query);

export default compose(data, branchComponent)(NavbarLoggedIn);
