import { MediaBasePadding } from "@/components";
import styled from "styled-components";

export const Container = styled(MediaBasePadding)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ActionButton = styled.button`
  width: 40px;
  color: white;
  border-radius: 4px;
  padding: 4px 2px;
  transition: background-color 0.3s;
  font-size: 12px;
  background-color: ${({ theme }) => theme.icon.tertiary};

  &:hover {
    background-color: ${({ theme }) => theme.icon.secondary};
  }
`;
