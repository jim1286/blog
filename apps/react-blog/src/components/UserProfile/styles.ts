import { BSS } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PostText = styled(BSS)`
  color: ${({ theme }) => theme.text.tertiary};
`;

export const UserThumbnail = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  border-radius: 50%;
`;
