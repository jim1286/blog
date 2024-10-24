import { MEDIA_SIZE } from "@/constants";
import { BSS } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  @media all and (min-width: ${MEDIA_SIZE.MIN_SIZE}px) {
    width: 320px;
    height: 300px;
    gap: 15px;
  }

  @media all and (min-width: ${MEDIA_SIZE.PHONE_SIZE}px) and (max-width: ${MEDIA_SIZE.MIN_SIZE -
    1}px) {
    width: calc(50% - 10px);
    aspect-ratio: 1 / 1;
    justify-content: space-between;
  }

  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE - 1}px) {
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
  }

  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  background: ${({ theme }) => theme.bg.surface.tertiary};
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
    transform: translateY(-8px);
  }
`;

export const Thumbnail = styled.img`
  @media all and (min-width: ${MEDIA_SIZE.MIN_SIZE}px) {
    height: 200px;
  }

  @media all and (min-width: ${MEDIA_SIZE.PHONE_SIZE}px) and (max-width: ${MEDIA_SIZE.MIN_SIZE -
    1}px) {
    height: 70%;
  }

  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE - 1}px) {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }

  width: 100%;
  object-fit: fill;
`;

export const Body = styled.div`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    width: calc(100% - 100px);
    height: 100%;
    gap: 5px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const Footer = styled.div`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    flex-direction: column;
    align-items: start;
    gap: 3px;
  }

  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Content = styled(BSS)`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    display: flex;
    gap: 5px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Length = styled(BSS)`
  color: ${({ theme }) => theme.text.tertiary};
`;
