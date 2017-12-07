import styled from 'styled-components';

export default styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.darkGrey};
  background-color: ${props => props.theme.colors.white};
  background-image: none;
  background-clip: padding-box;
  border: 1px solid
    ${props =>
      props.error === 'true'
        ? props.theme.colors.border.error
        : props.theme.colors.border.default};
  border\-radius: 3px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;
