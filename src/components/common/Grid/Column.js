import styled from 'styled-components';

export default styled.div`
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  ${props =>
    props.sm
      ? `@media (${props.theme.breakpoints.mobile}) {
    width: ${props.size ? props.size / 12 * 100 : '100'}%;
  }`
      : null};

  ${props =>
    props.md
      ? `@media (${props.theme.breakpoints.tablet}) {
        width: ${props.size ? props.size / 12 * 100 : '100'}%;
      }`
      : null};

  ${props =>
    props.lg
      ? `@media (${props.theme.breakpoints.desktop}) {
            width: ${props.size ? props.size / 12 * 100 : '100'}%;
          }`
      : null};
`;
