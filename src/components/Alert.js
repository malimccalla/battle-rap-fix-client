import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/variables.json';

const Wrapper = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0;
  border: 1px solid transparent;
  border\-radius: 3px;

  color: ${colors.alerts.error.text};
  background-color: ${colors.alerts.error.background};
  border-color: ${colors.alerts.error.border};
`;

const List = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0.5em 0 0;
  list-style-position: inside;
`;

const Message = styled.div`
  font-weight: 600;
`;

const Alert = ({ message, errors }) => (
  <Wrapper>
    <Message>{message}</Message>
    <List>{errors.map(error => <li key={error}>{error}</li>)}</List>
  </Wrapper>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Alert;
