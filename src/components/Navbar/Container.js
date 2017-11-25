import { Container } from '../common/Layout';

export default Container.extend`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;
