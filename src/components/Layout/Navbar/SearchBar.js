import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 100;
  max-width: 100%;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: #53565f;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 80%;
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &::-moz-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:-moz-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SearchBar = ({ placeholder }) => (
  <Wrapper>
    <Input type="text" placeholder={placeholder} />
  </Wrapper>
);

SearchBar.defaultProps = {
  placeholder: 'Search...',
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
