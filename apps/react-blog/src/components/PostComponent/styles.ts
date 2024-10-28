import { MEDIA_SIZE } from "@/constants";
import { BSS } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  @media all and (min-width: ${MEDIA_SIZE.MIN_SIZE}px) {
    width: 320px;
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
`;
export const Footer = styled.div`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    flex-direction: column;
    align-items: start;
    padding: 5px 10px;
    gap: 3px;
  }

  display: flex;
  padding: 10px 15px;
  align-items: center;
  gap: 15px;
`;

export const ContentWrap = styled.div`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    flex-direction: column;
    align-items: start;
    padding: 5px 10px;
    gap: 3px;
  }

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.border.tertiary};
  padding: 10px 15px;
  gap: 5px;
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const Content = styled(BSS)`
  color: ${({ theme }) => theme.text.secondary};
`;

export const PostText = styled(BSS)`
  color: ${({ theme }) => theme.text.tertiary};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const UserThumbnail = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
`;
