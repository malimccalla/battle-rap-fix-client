import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Navbar from '../Navbar';

class Layout extends Component {
  state = {
    isSidebarOpen: true,
  };

  toggleSidebar = e => {
    e.preventDefault();

    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    const { isSidebarOpen } = this.state;
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={this.toggleSidebar}
          />
          {children}
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

const StyledLayout = styled.div`
  width: 100%;
  padding-bottom: 10rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
