import styled from 'styled-components';

export default styled.div`
  padding: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.colors.white};

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
  }

  @media (${props => props.theme.breakpoints.mobile}) {
    padding: 3rem;
  }

  @media (${props => props.theme.breakpoints.tablet}) {
    max-width: ${props => (props.width ? props.width : '100%')};
  }
`;
