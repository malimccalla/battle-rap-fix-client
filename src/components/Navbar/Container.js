import { Container } from '../common/Layout';
import { breakpoints } from '../../styles/variables.json';

export default Container.extend`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  @media (${breakpoints.tablet}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;
