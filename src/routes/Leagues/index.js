import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Col from '../../components/common/Grid/Column';
import { Container, Row } from '../../components/common/Grid';

import query from '../../queries/allLeagues';

const Leagues = ({ data: { leagues = [] } }) => (
  <Layout>
    <Container>
      <Row>
        <Col size={6} md>
          <h1>Leagues</h1>
        </Col>
        <Col size={6} md>
          <Link to="/leagues/new">Add League</Link>
        </Col>
      </Row>
      <Card>
        <ul>{leagues.map(u => <li key={u.id}>{u.stageName}</li>)}</ul>
      </Card>
    </Container>
  </Layout>
);

Leagues.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Leagues);
