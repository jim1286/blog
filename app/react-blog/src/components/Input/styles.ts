import styled from "styled-components";

interface InputFieldProps {
  size: "md" | "sm";
}

export const InputField = styled.input<InputFieldProps>`
  border-radius: 4px;
  width: 100%;
  padding: 0 14px;
  color: ${({ theme }) => theme.text.primary};
  border: ${({ theme }) => `1px solid ${theme.border.tertiary}`};
  background: ${({ theme }) => theme.bg.fill.primary.rest};
  height: ${({ size }) => (size === "md" ? "40px" : "32px")};

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
