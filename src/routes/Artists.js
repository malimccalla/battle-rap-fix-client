import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Col from '../components/common/Grid/Column';
import { Container, Row } from '../components/common/Grid';

const Artists = () => (
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
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vero
          suscipit voluptatum blanditiis doloribus, obcaecati minus dolor error
          laborum, corporis libero doloremque cumque sit quaerat repellendus!
          Earum temporibus fugit debitis
        </div>
      </Card>
    </Container>
  </Layout>
);

export default Artists;
