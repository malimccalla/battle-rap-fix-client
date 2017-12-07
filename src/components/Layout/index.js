import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Navbar from '../Navbar';

const Layout = props => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <Navbar />
      {props.children}
    </StyledLayout>
  </ThemeProvider>
);

const StyledLayout = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
