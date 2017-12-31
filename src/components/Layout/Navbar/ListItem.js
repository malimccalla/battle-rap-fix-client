import React from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const ListItem = ({ url, text }) => (
  <li>
    <Link to={url}>{text}</Link>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ListItem;
