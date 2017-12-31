import styled from 'styled-components';

export default styled.div`
  display: none;
  flex-grow: 3;
  justify-content: flex-end;

  & a:last-child {
    padding-right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;
