import { IconHeartFilled, IconHeart } from "@tabler/icons-react";
import React from "react";
import { Container } from "./styles";

interface Props {
  commentId: string;
  favoriteLength: number;
  checkUserFavorite: boolean;
  onClickFavorite: (commentId: string) => void;
}

const FavoriteComponent: React.FC<Props> = ({
  commentId,
  favoriteLength = 0,
  checkUserFavorite,
  onClickFavorite,
}) => {
  const HeartIcon = checkUserFavorite ? IconHeartFilled : IconHeart;

  return (
    <Container onClick={() => onClickFavorite(commentId)}>
      <HeartIcon size={15} fill={checkUserFavorite ? "red" : "white"} />
      {favoriteLength}
    </Container>
  );
};

export default FavoriteComponent;
