import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 30px;
  height: 40px;
  border: none;
  outline: none;
  margin-right: 1.5rem;
  padding: 0.3125rem 0;
  position: relative;
  cursor: pointer;
  background-color: transparent;
`;

const Bar = styled.span`
  height: 3px;
  width: 100%;
  display: block;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};

  &:first-child {
    margin-bottom: 4px;
  }

  &:last-child {
    margin-top: 4px;
  }
`;

const ToggleIcon = ({ toggleSidebar }) => (
  <Button onClick={toggleSidebar}>
    <Bar />
    <Bar />
    <Bar />
  </Button>
);

ToggleIcon.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default ToggleIcon;
