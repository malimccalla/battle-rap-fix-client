import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Col from '../../components/common/Grid/Column';
import { Container, Row } from '../../components/common/Grid';

import query from '../../queries/allArtists';

const Artists = ({ data: { artists = [] } }) => (
  <Layout>
    <Container>
      <Row>
        <Col size={6} md>
          <h1>Artists</h1>
        </Col>
        <Col size={6} md>
          <Link to="/artists/new">Add Artist</Link>
        </Col>
      </Row>
      <Card>
        <ul>{artists.map(u => <li key={u.id}>{u.stageName}</li>)}</ul>
      </Card>
    </Container>
  </Layout>
);

Artists.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(query)(Artists);
