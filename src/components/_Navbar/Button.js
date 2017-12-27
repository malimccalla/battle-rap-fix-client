import { Button } from '../common/Button';

export default Button.extend`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props =>
    props.outline ? 'transparent' : props.theme.colors.grey};
  border-width: ${props => (props.outline ? '2px' : '1px')};
  border-color: ${props =>
    props.outline ? props.theme.colors.white : props.theme.colors.grey};

  &:hover,
  &:focus,
  &:active {
    color: ${props =>
      props.outline ? props.theme.colors.black : props.theme.colors.white};
    background-color: ${props =>
      props.outline ? props.theme.colors.white : props.theme.colors.greyDarken};
    border-color: ${props =>
      props.outline ? props.theme.colors.white : props.theme.colors.greyDarken};
  }

  @media (${props => props.theme.breakpoints.tablet}) {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
`;
