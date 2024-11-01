import React, { useState } from "react";
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
import {
  useCreateCommentReplyMutation,
  useGetUserQuery,
  useUpdateCommentFavoriteMutation,
} from "@/queries";
import { Input } from "../Input";
import { Button } from "antd";

interface Props {
  isAuthor: boolean;
  comment: CommentEntityResponse;
  postId?: string;
}

const CommentComponent: React.FC<Props> = ({ isAuthor, comment, postId }) => {
  const getUser = useGetUserQuery();
  const updateCommentFavorite = useUpdateCommentFavoriteMutation();
  const createCommentReply = useCreateCommentReplyMutation();
  const checkUserFavorite = comment.commentFavorites
    .map((ele) => ele.userId)
    .find((ele) => ele === getUser.data?.id);
  const HeartIcon = checkUserFavorite ? IconHeartFilled : IconHeart;
  const [openChildren, setOpenChildren] = useState(false);
  const [childrenComment, setChildrenComment] = useState("");

  const handleClickFavorite = async () => {
    try {
      await updateCommentFavorite.mutateAsync({ commentId: comment.id });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitChildrenComment = async () => {
    if (!childrenComment || !postId) {
      return;
    }

    const params = {
      postId,
      commentId: comment.id,
      content: childrenComment,
    };

    try {
      await createCommentReply.mutateAsync(params);
      CloseChildrenComment();
    } catch (error) {
      console.log(error);
    }
  };

  const CloseChildrenComment = () => {
    setOpenChildren(false);
    setChildrenComment("");
  };

  return (
    <Container>
      <FlexRow width="100%">
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
            <ActionButton onClick={() => setOpenChildren((prev) => !prev)}>
              답글
            </ActionButton>
            {isAuthor && (
              <FlexRow gap={5}>
                <ActionButton>수정</ActionButton>
                <ActionButton>삭제</ActionButton>
              </FlexRow>
            )}
          </CommentActions>
        </CommentContent>
      </FlexRow>
      {openChildren && (
        <FlexRow width="90%" alignItems="center" gap={10}>
          <BM style={{ width: "70px" }}>답글 작성</BM>
          <Input
            placeholder="댓글을 작성하세요."
            value={childrenComment}
            onChange={(value) => setChildrenComment(value)}
          />
          <Button type="primary" onClick={handleSubmitChildrenComment}>
            작성하기
          </Button>
          <Button type="primary" onClick={CloseChildrenComment}>
            취소
          </Button>
        </FlexRow>
      )}
    </Container>
  );
};

export default CommentComponent;
