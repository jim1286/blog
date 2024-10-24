import { MEDIA_SIZE } from "@/constants";
import styled from "styled-components";

interface FlexRowProps {
  width?: string;
  height?: string;
  gap?: number;
  backgroundColor?: string;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end";
}

interface FlexColumnProps {
  width?: string;
  height?: string;
  gap?: number;
  backgroundColor?: string;
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "stretch";
  alignItems?: "flex-start" | "center" | "flex-end";
}

interface SpacerProps {
  size: number;
  type: "vertical" | "horizontal";
}

export const Spacer = styled.div<SpacerProps>`
  width: ${({ type, size }) => (type === "vertical" ? `${size}` : "1")}px;
  height: ${({ type, size }) => (type === "horizontal" ? `${size}` : "1")}px;
`;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => width && `${width}`};
  height: ${({ height }) => height && `${height}`};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && `${backgroundColor}`};
  gap: ${({ gap }) => gap && `${gap}`}px;
`;

export const FlexColumn = styled.div<FlexColumnProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width && `${width}`};
  height: ${({ height }) => height && `${height}`};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && `${backgroundColor}`};
  gap: ${({ gap }) => gap && `${gap}`}px;
`;

export const MediaBasePadding = styled.div`
  @media all and (min-width: ${MEDIA_SIZE.EXTRA_SIZE}px) {
    padding: 20px 100px;
  }

  @media all and (min-width: ${MEDIA_SIZE.LARGE_SIZE}px) and (max-width: ${MEDIA_SIZE.EXTRA_SIZE -
    1}px) {
    padding: 20px 80px;
  }

  @media all and (min-width: ${MEDIA_SIZE.NORMAL_SIZE}px) and (max-width: ${MEDIA_SIZE.LARGE_SIZE -
    1}px) {
    padding: 20px 60px;
  }

  @media all and (min-width: ${MEDIA_SIZE.MIN_SIZE}px) and (max-width: ${MEDIA_SIZE.NORMAL_SIZE -
    1}px) {
    padding: 20px 40px;
  }

  @media all and (min-width: ${MEDIA_SIZE.PHONE_SIZE}px) and (max-width: ${MEDIA_SIZE.MIN_SIZE -
    1}px) {
    padding: 20px 30px;
  }

  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE - 1}px) {
    padding: 20px 20px;
  }
`;
