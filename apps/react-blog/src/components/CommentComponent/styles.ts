import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.border.tertiary};

  &:last-child {
    border-bottom: none;
  }
`;
