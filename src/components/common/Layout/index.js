import styled from 'styled-components';
import { breakpoints } from '../../../styles/variables.json';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  @media (${breakpoints.mobile}) {
    max-width: 540px;
  }

  @media (${breakpoints.tablet}) {
    max-width: 720px;
  }

  @media (${breakpoints.desktop}) {
    max-width: 960px;
  }

  @media (${breakpoints.largeDesktop}) {
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
