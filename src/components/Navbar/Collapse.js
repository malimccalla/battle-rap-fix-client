import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  align-items: center;
  display: ${props => (props.isOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    display: flex;
  }
`;
