import styled from 'styled-components';

export const Button = styled.input`
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${props => (props.primary ? '#007bff' : '#868e96')};
  border-color: ${props => (props.primary ? '#007bff' : '#868e96')};

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background-color: ${props => (props.primary ? '#0069d9' : '#727b84')};
    border-color: ${props => (props.primary ? '#0062cc' : '#6c757d')};
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${props => (props.primary ? '#007bff' : '#868e96')};
  border-color: ${props => (props.primary ? '#007bff' : '#868e96')};

  &:hover,
  &:focus,
  &:active {
    color: #fff;
    background-color: ${props => (props.primary ? '#0069d9' : '#727b84')};
    border-color: ${props => (props.primary ? '#0062cc' : '#6c757d')};
  }
`;
