import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
