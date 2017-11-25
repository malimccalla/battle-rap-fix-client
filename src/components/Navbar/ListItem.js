import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: #fff;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;

  @media (min-width: 992px) {
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
