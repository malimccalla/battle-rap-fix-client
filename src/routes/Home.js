import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Container } from '../components/common/Layout';

import query from '../queries/allUsers';

const Home = ({ data: { users = [] } }) => (
  <Container>
    <h1>Battle Rap Fix</h1>
    <ul>{users.map(u => <li key={u.id}>{u.email}</li>)}</ul>
  </Container>
);

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Home);
