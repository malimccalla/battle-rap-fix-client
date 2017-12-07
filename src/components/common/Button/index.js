import styled from 'styled-components';

export const Button = styled.button`
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
  padding: 0.5rem 1.75rem;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  border\-radius: 3px;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey};
  border-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey};

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};
    background-color: ${props =>
      props.primary
        ? props.theme.colors.primaryDarken
        : props.theme.colors.greyDarken};
    border-color: ${props =>
      props.primary
        ? props.theme.colors.primaryDarken
        : props.theme.colors.greyDarken};
  }
`;

export const InputButton = styled.input`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.5rem 1.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border\-radius: 3px;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey};
  border-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.grey};

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.white};
    background-color: ${props =>
      props.primary
        ? props.theme.colors.primaryDarken
        : props.theme.colors.greyDarken};
    border-color: ${props =>
      props.primary
        ? props.theme.colors.primaryDarken
        : props.theme.colors.greyDarken};
  }
`;
