import React from "react";
import { Container } from "./styles";
import { IconX } from "@tabler/icons-react";

interface Props {
  tagName: string;
  onClickTag?: (tagName: string) => void;
  onDeleteTag?: (tagName: string) => void;
}

const Tag: React.FC<Props> = ({ tagName, onClickTag, onDeleteTag }) => {
  return (
    <Container onClick={() => onClickTag?.(tagName)}>
      {tagName}
      {onDeleteTag && (
        <IconX
          size={14}
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteTag(tagName);
          }}
        />
      )}
    </Container>
  );
};

export default Tag;
