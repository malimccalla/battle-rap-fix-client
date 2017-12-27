import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: inherit;
  text-decoration: none;
  white-space: nowrap;
  margin: 0;
  margin-right: 1rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  display: inline-block;
`;
