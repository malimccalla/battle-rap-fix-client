import styled from 'styled-components';

export default styled.nav`
  color: ${props => props.theme.colors.white};
  margin-bottom: 30px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.colors.black};
`;
