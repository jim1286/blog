import { BMS } from "@/theme";
import styled from "styled-components";

interface SubTitleProps {
  subTitle?: string;
  errorMessage?: string;
}

export const Container = styled.div<SubTitleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ subTitle, errorMessage }) =>
    !errorMessage ? "auto" : subTitle ? "105px" : "90px"};
`;

export const InputTitle = styled(BMS)`
  width: 100%;
  height: 20px;
  gap: 3px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
`;

export const Label = styled(BMS)`
  width: 7px;
  height: 20px;
  color: ${({ theme }) => theme.text.danger};
`;
