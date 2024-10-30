import { BSS } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border.tertiary};

  &:last-child {
    border-bottom: none;
  }
`;

export const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
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
  color: ${({ theme }) => theme.text.tertiary};
`;

export const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.icon.tertiary};
  color: white; /* 버튼 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 4px; /* 모서리 둥글게 */
  padding: 5px 10px; /* 버튼 안쪽 여백 */
  cursor: pointer; /* 커서 포인터로 변경 */
  transition: background-color 0.3s; /* 배경색 변화 애니메이션 */

  &:hover {
    background-color: ${({ theme }) => theme.icon.secondary};
  }
`;
