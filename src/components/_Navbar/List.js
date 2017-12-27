import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  list-style: none;

  @media (${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
