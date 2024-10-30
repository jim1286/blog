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
