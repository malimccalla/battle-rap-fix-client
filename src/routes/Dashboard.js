import React from 'react';

import Layout from '../components/Layout';
import Card from '../components/Card';
import { Container } from '../components/common/Grid';

const Dashboard = () => (
  <Layout>
    <Container>
      <h1>Dashboard</h1>
      <Card />
    </Container>
  </Layout>
);

export default Dashboard;
