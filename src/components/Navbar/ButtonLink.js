import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/variables.json';

export default styled(RouterLink)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: ${colors.white};
  background-color: ${props => (props.outline ? 'transparent' : colors.grey)};
  border-width: ${props => (props.outline ? '2px' : '1px')};
  border-color: ${props => (props.outline ? colors.white : colors.grey)};

  &:hover,
  &:focus,
  &:active {
    color: ${props => (props.outline ? colors.black : colors.white)};
    background-color: ${props =>
      props.outline ? colors.white : colors.greyDarken};
    border-color: ${props =>
      props.outline ? colors.white : colors.greyDarken};
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
`;
