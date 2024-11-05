import { BSS } from "@/theme";
import styled from "styled-components";

export const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthorTag = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 8px;
  font-size: 9px;
  border: 1px solid ${({ theme }) => theme.border.tertiary};
  cursor: pointer;
`;

export const CommentTime = styled(BSS)`
  width: 150px;
  color: ${({ theme }) => theme.text.tertiary};
`;

export const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
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
