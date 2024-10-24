import styled from 'styled-components';

interface InputFieldProps {
  size: 'md' | 'sm';
}

export const InputField = styled.input<InputFieldProps>`
  border: ${({ theme }) => `1px solid ${theme.border.primary}`};
  border-radius: 4px;
  background: ${({ theme }) => theme.bg.fill.primary.rest};
  width: 100%;
  height: ${({ size }) => (size === 'md' ? '40px' : '32px')};
  padding: 0 14px;
  color: ${({ theme }) => theme.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.text.tertiary};
  }

  &:disabled {
    background: ${({ theme }) => theme.bg.fill.disabled};
    color: ${({ theme }) => theme.text.disabled};
  }

  &.input-error {
    border-color: ${({ theme }) => theme.border.danger} !important;
    outline: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.border.brand} !important;
  }
`;
