import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Nav from './Nav';
import Brand from './Brand';
import List from './List';
import ListItem from './ListItem';
import Collapse from './Collapse';
import Container from './Container';

import query from '../../queries/currentUser';

const Navbar = ({ data: { loading, user } }) => (
  <Nav>
    <Container>
      <Brand to="/">Battle Rap Fix</Brand>
      {!loading ? (
        <Collapse>
          <List>
            {user ? (
              <ListItem text="Dashboard" url="/dashboard" />
            ) : (
              [
                <ListItem key="register" text="Register" url="/register" />,
                <ListItem key="login" text="Login" url="/login" />,
              ]
            )}
          </List>
        </Collapse>
      ) : null}
    </Container>
  </Nav>
);

Navbar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Navbar);
