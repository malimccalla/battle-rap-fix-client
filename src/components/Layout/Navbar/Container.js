import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
    justify-content: space-between;
    padding: 0.5rem 2rem;
  }
`;
