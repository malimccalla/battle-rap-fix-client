import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.json';

export default styled.p`
  margin: 0.5rem 0;

  @media (${breakpoints.tablet}) {
    margin: 0;
  }
`;
