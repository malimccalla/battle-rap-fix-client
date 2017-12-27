import styled from 'styled-components';

export default styled.input`
  flex-grow: 100;
  color: ${({ theme }) => theme.colors.white};
  max-width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: #53565f;

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
