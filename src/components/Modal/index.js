import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

const ModalCard = Card.extend`
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;

  @media (${props => props.theme.breakpoints.mobile}) {
    width: ${props => (props.width ? props.width : 'auto')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Modal = ({ children, width }) => (
  <Wrapper>
    <ModalCard width={width}>{children}</ModalCard>
  </Wrapper>
);

Modal.defaultProps = {
  width: undefined,
};

Modal.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
