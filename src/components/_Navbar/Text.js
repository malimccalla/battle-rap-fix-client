import styled from 'styled-components';

export default styled.p`
  margin: 0.5rem 0;

  @media (${props => props.theme.breakpoints.tablet}) {
    margin: 0;
  }
`;
