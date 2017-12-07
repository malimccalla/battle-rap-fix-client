import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  @media (${props => props.theme.breakpoints.mobile}) {
    max-width: 540px;
  }

  @media (${props => props.theme.breakpoints.tablet}) {
    max-width: 720px;
  }

  @media (${props => props.theme.breakpoints.desktop}) {
    max-width: 960px;
  }

  @media (${props => props.theme.breakpoints.largeDesktop}) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;
