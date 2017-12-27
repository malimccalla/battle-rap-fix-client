import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 31px;
  height: 25px;
  position: relative;

  @media (${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Bar = styled.span`
  position: absolute;
  height: 20%;
  left: 0px;
  right: 0px;
  top: ${props => props.topPosition}%;
  opacity: 1;
  background-color: ${props => props.theme.colors.white};
`;

const Button = styled.button`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  border: none;
  opacity: 0;
  font-size: 8px;
  cursor: pointer;
`;

const Toggler = ({ onToggle }) => (
  <Wrapper>
    <span>
      <Bar topPosition="0" />
      <Bar topPosition="40" />
      <Bar topPosition="80" />
    </span>
    <Button onClick={onToggle}>Toggle Menu</Button>
  </Wrapper>
);

Toggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Toggler;
