import { Button } from '../common/Button';

export default Button.extend`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  color: #fff;
  background-color: ${props => (props.outline ? 'transparent' : '#868e96')};
  border-width: ${props => (props.outline ? '2px' : '1px')};
  border-color: ${props => (props.outline ? '#fff' : '#868e96')};

  &:hover,
  &:focus,
  &:active {
    color: ${props => (props.outline ? '#222' : '#fff')};
    background-color: ${props => (props.outline ? '#fff' : '#727b84')};
    border-color: ${props => (props.outline ? '#fff' : '#6c757d')};
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
`;
