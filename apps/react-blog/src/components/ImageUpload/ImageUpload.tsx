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
import { useMemo } from "react";

interface Props {
  size?: number;
  currentImage: File | null;
  onChangeImage: (imageFile: File | null) => void;
}

const ImageUpload: React.FC<Props> = ({
  size = 100,
  currentImage,
  onChangeImage,
}) => {
  const theme = useTheme();
  const previewUrl = useMemo(() => {
    return currentImage ? URL.createObjectURL(currentImage) : undefined;
  }, [currentImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onChangeImage(file);
    }
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    fileInput.click();
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
              onClick={() => onChangeImage(null)}
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
