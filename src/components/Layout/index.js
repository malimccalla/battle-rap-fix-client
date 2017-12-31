import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Layout extends Component {
  state = {
    isSidebarOpen: false,
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
          <Wrapper>
            {isSidebarOpen ? <Sidebar /> : null}
            <Main>{children}</Main>
          </Wrapper>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

const StyledLayout = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 56px);
`;

const Main = styled.main`
  flex: 1 1 auto;
  overflow: auto;
  margin-top: 30px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 15px;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
