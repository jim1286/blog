import React from "react";
import {
  Container,
  AvatarImage,
  CommentContent,
  CommentHeader,
  CommentTime,
  CommentActions,
  ActionButton,
  AuthorTag,
  FavoriteText,
} from "./styles";
import { CommentEntityResponse } from "@blog/types";
import { DateUtil } from "@/utils";
import { BLS, BM } from "@/theme";
import { FlexRow } from "../BaseStyle";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useGetUserQuery, useUpdateCommentFavoriteMutation } from "@/queries";

interface Props {
  isAuthor: boolean;
  comment: CommentEntityResponse;
}

const CommentComponent: React.FC<Props> = ({ isAuthor, comment }) => {
  const getUser = useGetUserQuery();
  const updateCommentFavorite = useUpdateCommentFavoriteMutation();
  const checkUserFavorite = comment.commentFavorites
    .map((ele) => ele.userId)
    .find((ele) => ele === getUser.data?.id);
  const HeartIcon = checkUserFavorite ? IconHeartFilled : IconHeart;

  const handleClickFavorite = async () => {
    try {
      await updateCommentFavorite.mutateAsync({ commentId: comment.id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <AvatarImage
        src={comment.user.thumbnailUrl}
        style={{ background: `${comment.user.thumbnailUrl || "black"}` }}
      />
      <CommentContent>
        <CommentHeader>
          <FlexRow gap={5} alignItems="center">
            <BLS>{comment.user.userName}</BLS>
            {isAuthor && <AuthorTag>작성자</AuthorTag>}
            <FavoriteText>
              {comment.commentFavorites.length}개의 좋아요
            </FavoriteText>
          </FlexRow>
          <FlexRow gap={5}>
            <CommentTime>
              {DateUtil.utcToLocalYYYYMMDDHHmm(comment.createdAt)}
            </CommentTime>
            <HeartIcon
              size={15}
              cursor="pointer"
              onClick={handleClickFavorite}
              fill={checkUserFavorite ? "red" : "white"}
            />
          </FlexRow>
        </CommentHeader>
        <BM>{comment.content}</BM>
        <CommentActions>
          <ActionButton>답글</ActionButton>
          {isAuthor && (
            <FlexRow gap={5}>
              <ActionButton>수정</ActionButton>
              <ActionButton>삭제</ActionButton>
            </FlexRow>
          )}
        </CommentActions>
      </CommentContent>
    </Container>
  );
};

export default CommentComponent;
