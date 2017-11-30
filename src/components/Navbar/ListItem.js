import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: rgba(255, 255, 255, 0.5);
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }

  @media (min-width: 768px) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const ListItem = ({ text, url }) => (
  <li>
    <Link to={url}>{text}</Link>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ListItem;
