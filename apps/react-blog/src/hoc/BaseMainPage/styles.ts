import { MediaBasePadding } from "@/components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg.surface.quaternary};
`;

export const Tabs = styled(MediaBasePadding)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  gap: 15px;
`;
