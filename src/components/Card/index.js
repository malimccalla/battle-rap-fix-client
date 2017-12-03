import styled from 'styled-components';
import { colors, breakpoints, boxShadow } from '../../styles/variables.json';

export default styled.div`
  padding: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  box-shadow: ${boxShadow};
  background-color: ${colors.white};

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
  }

  @media (${breakpoints.mobile}) {
    padding: 3rem;
  }

  @media (${breakpoints.tablet}) {
    max-width: ${props => (props.width ? props.width : '100%')};
  }
`;
