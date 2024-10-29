import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SizeProps {
  size: number;
}

export const PreviewContainer = styled.div<SizeProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 2px dashed ${({ theme }) => theme.border.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.bg.surface.primary};
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text.tertiary};
  text-align: center;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* 이미지 비율 유지 */
`;

export const HiddenInput = styled.input`
  display: none; /* 기본 파일 입력 숨기기 */
`;
