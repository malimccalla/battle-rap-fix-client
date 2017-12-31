import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Card from '../components/Card';
import { Container } from '../components/common/Grid';

import query from '../queries/allUsers';

const Home = ({ data: { users = [] } }) => (
  <Container>
    <h1>Home</h1>
    <Card>
      <ul>{users.map(u => <li key={u.id}>{u.email}</li>)}</ul>
    </Card>
  </Container>
);

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Home);
