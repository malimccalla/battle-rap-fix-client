import React from 'react';
import PropTypes from 'prop-types';

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

const Navbar = ({ toggleSidebar }) => (
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

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
