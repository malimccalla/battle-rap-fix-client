import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.json';

export default styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  list-style: none;

  @media (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
