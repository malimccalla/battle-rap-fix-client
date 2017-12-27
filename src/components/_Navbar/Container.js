import { Container } from '../common/Grid';

export default Container.extend`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  @media (${props => props.theme.breakpoints.tablet}) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;
