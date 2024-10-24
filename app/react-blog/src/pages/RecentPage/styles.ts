import styled from "styled-components";
import { MEDIA_SIZE } from "@/constants";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const Container = styled.div`
  @media all and (min-width: ${MEDIA_SIZE.EXTRA_SIZE}px) {
    width: 1680px;
  }

  @media all and (min-width: ${MEDIA_SIZE.LARGE_SIZE}px) and (max-width: ${MEDIA_SIZE.EXTRA_SIZE -
    1}px) {
    width: 1340px;
  }

  @media all and (min-width: ${MEDIA_SIZE.MIN_SIZE}px) and (max-width: ${MEDIA_SIZE.LARGE_SIZE -
    1}px) {
    width: 1000px;
  }

  @media all and (max-width: ${MEDIA_SIZE.MIN_SIZE - 1}px) {
    width: 100%;
    padding: 0 20px;
  }

  gap: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Body = styled.div`
  @media all and (max-width: ${MEDIA_SIZE.PHONE_SIZE}px) {
    gap: 10px;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
