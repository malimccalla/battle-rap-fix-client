import styled from 'styled-components';

export default styled.ul`
  display: none;
  flex-grow: 1;
  flex-direction: row;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 1rem;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;
