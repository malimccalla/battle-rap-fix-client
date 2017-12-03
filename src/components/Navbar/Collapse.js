import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.json';

export default styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  align-items: center;
  display: ${props => (props.isOpen ? 'block' : 'none')};

  @media (${breakpoints.tablet}) {
    display: flex;
  }
`;
