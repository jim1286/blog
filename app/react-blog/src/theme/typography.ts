import styled from "styled-components";

export interface TypoProps {
  color?: string;
}

export const Bold = styled.div<TypoProps>`
  color: ${({ color, theme }) => color ?? theme.text.primary};
`;

export const SemiBold = styled.div<TypoProps>`
  color: ${({ color, theme }) => color ?? theme.text.primary};
`;

export const Medium = styled.div<TypoProps>`
  color: ${({ color, theme }) => color ?? theme.text.primary};
`;

export const Regular = styled.div<TypoProps>`
  color: ${({ color, theme }) => color ?? theme.text.primary};
`;

export const Display = styled(Bold)`
  font-size: 48px;
  line-height: 60px;
`;

export const H1 = styled(Bold)`
  font-size: 36px;
  line-height: 45px;
`;

export const H2 = styled(Bold)`
  font-size: 30px;
  line-height: 38px;
`;

export const H3 = styled(Bold)`
  font-size: 24px;
  line-height: 30px;
`;

export const H4 = styled(SemiBold)`
  font-size: 20px;
  line-height: 30px;
`;

export const H5 = styled(SemiBold)`
  font-size: 18px;
  line-height: 27px;
`;

export const H6 = styled(SemiBold)`
  font-size: 16px;
  line-height: 24px;
`;

export const BL = styled(Regular)`
  font-size: 16px;
  line-height: 24px;
`;

export const BLS = styled(Medium)`
  font-size: 16px;
  line-height: 24px;
`;

export const BM = styled(Regular)`
  font-size: 14px;
  line-height: 20px;
`;

export const BMS = styled(Medium)`
  font-size: 14px;
  line-height: 20px;
`;

export const BS = styled(Regular)`
  font-size: 12px;
  line-height: 16px;
`;

export const BSS = styled(Medium)`
  font-size: 12px;
  line-height: 16px;
`;

export const LL = styled(Medium)`
  font-size: 16px;
  line-height: 16px;
`;

export const LM = styled(Medium)`
  font-size: 14px;
  line-height: 14px;
`;

export const LS = styled(Medium)`
  font-size: 12px;
  line-height: 12px;
`;
