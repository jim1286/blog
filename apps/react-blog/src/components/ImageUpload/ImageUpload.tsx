import { useState } from "react";
import {
  Container,
  HiddenInput,
  PreviewContainer,
  ImagePreview,
  Placeholder,
} from "./styles";
import { IconX } from "@tabler/icons-react";
import { BSS } from "@/theme";
import { useTheme } from "styled-components";

interface Props {
  size?: number;
  fileRef: React.MutableRefObject<File | null>;
}

const ImageUpload: React.FC<Props> = ({ size = 100, fileRef }) => {
  const theme = useTheme();
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      fileRef.current = file;
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput.click();
  };

  const handleReset = () => {
    setPreviewUrl("");
    fileRef.current = null;
  };

  return (
    <Container>
      <HiddenInput
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleFileChange}
      />
      <PreviewContainer size={size}>
        {previewUrl ? (
          <>
            <ImagePreview src={previewUrl} alt="Preview" />
            <IconX
              onClick={handleReset}
              size={15}
              style={{
                position: "absolute",
                zIndex: "10",
                top: "0px",
                right: "0px",
                cursor: "pointer",
              }}
            />
          </>
        ) : (
          <Placeholder onClick={handleUploadClick}>
            <BSS color={theme.text.tertiary}>업로드한 사진이</BSS>
            <BSS color={theme.text.tertiary}>없습니다.</BSS>
          </Placeholder>
        )}
      </PreviewContainer>
    </Container>
  );
};

export default ImageUpload;
