import { MEDIA_SIZE } from "@/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bg.surface.quaternary};
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  gap: 20px;
  padding: 20px 100px;

  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    padding: 20px 20px;
  }
`;
