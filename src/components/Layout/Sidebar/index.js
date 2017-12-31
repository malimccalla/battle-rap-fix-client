import React from 'react';
import styled from 'styled-components';

const Sidebar = () => (
  <Aside>
    <h2>Sidebar</h2>
  </Aside>
);

const Aside = styled.aside`
  flex: 1 0 100%;
  padding: 1rem;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1 0 300px;
    max-width: 18.75rem;
  }
`;

export default Sidebar;
