import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
`;
