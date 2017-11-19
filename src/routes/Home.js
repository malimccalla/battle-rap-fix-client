import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import query from '../queries/allUsers';

const Home = ({ data: { users = [] } }) => (
  <div>
    <h1>Battle Rap Fix</h1>
    <ul>{users.map(u => <li key={u.id}>{u.email}</li>)}</ul>
  </div>
);

Home.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Home);
