import { IconHeartFilled, IconHeart } from "@tabler/icons-react";
import React from "react";
import { Container } from "./styles";

interface Props {
  clickedTargetId: string;
  favoriteLength: number;
  checkUserFavorite: boolean;
  onClickFavorite?: (clickedTargetId: string) => void;
}

const FavoriteComponent: React.FC<Props> = ({
  clickedTargetId,
  favoriteLength = 0,
  checkUserFavorite,
  onClickFavorite,
}) => {
  const HeartIcon = checkUserFavorite ? IconHeartFilled : IconHeart;

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
        onClickFavorite?.(clickedTargetId);
      }}
    >
      <HeartIcon size={15} fill={checkUserFavorite ? "red" : "white"} />
      {favoriteLength}
    </Container>
  );
};

export default FavoriteComponent;
