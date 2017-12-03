import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Card from '../components/Card';
import { Container } from '../components/common/Layout';

import query from '../queries/allUsers';

const Home = ({ data: { users = [] } }) => (
  <Container>
    <Card>
      <h1>Home</h1>
      <ul>{users.map(u => <li key={u.id}>{u.email}</li>)}</ul>
    </Card>
  </Container>
);

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Home);
