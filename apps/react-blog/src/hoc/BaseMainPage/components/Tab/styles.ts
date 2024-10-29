import { H5 } from "@/theme";
import styled from "styled-components";

export const Container = styled(H5)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 30px;
  cursor: pointer;
`;

export const ActiveTab = styled.div`
  width: 100%;
  border-bottom: 2px solid;
`;
