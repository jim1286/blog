import { BM } from "@/theme";
import styled from "styled-components";

export const Container = styled(BM)`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background-color 0.3s;
  border: 1px solid black;
  cursor: pointer;
  background: ${({ theme }) => theme.bg.fill.secondary.rest};

  &:hover {
    background: ${({ theme }) => theme.bg.fill.secondary.active};
  }
`;
