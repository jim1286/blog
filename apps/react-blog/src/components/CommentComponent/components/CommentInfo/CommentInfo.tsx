import { FlexColumn, FlexRow } from "@/components/BaseStyle";
import { BLS, BM } from "@/theme";
import { DateUtil } from "@/utils";
import {
  AvatarImage,
  CommentContent,
  CommentHeader,
  AuthorTag,
  CommentTime,
  CommentActions,
  ActionButton,
} from "./styles";
import {
  useCreateCommentReplyMutation,
  useGetPostQuery,
  useGetUserQuery,
} from "@/queries";
import { useState } from "react";
import { Input, FavoriteComponent } from "@/components";
import { Button } from "antd";
import { CommentEntityResponse } from "@blog/types";

interface Props {
  type: "parent" | "children";
  comment: CommentEntityResponse;
  postId: string;
  onClickFavorite: (commentId: string) => void;
}

const CommentInfo: React.FC<Props> = ({
  type,
  comment,
  postId,
  onClickFavorite,
}) => {
  const getUser = useGetUserQuery();
  const getPost = useGetPostQuery(postId);
  const createCommentReply = useCreateCommentReplyMutation();
  const checkUserFavorite = !!comment.commentFavorites
    .map((ele) => ele.userId)
    .find((ele) => ele === getUser.data?.id);
  const [openChildren, setOpenChildren] = useState(false);
  const [childrenComment, setChildrenComment] = useState("");

  const handleSubmitChildrenComment = async () => {
    if (!childrenComment) {
      return;
    }

    const params = {
      postId,
      commentId: comment.id,
      content: childrenComment,
    };

    try {
      await createCommentReply.mutateAsync(params);
      closeChildrenComment();
    } catch (error) {
      console.log(error);
    }
  };

  const closeChildrenComment = () => {
    setOpenChildren(false);
    setChildrenComment("");
  };

  return (
    <>
      <FlexRow width="100%" gap={10}>
        {type === "children" && <FlexRow width="30px" />}
        <AvatarImage
          src={comment.user.thumbnailUrl}
          style={{ background: `${comment.user.thumbnailUrl || "black"}` }}
        />
        <CommentContent>
          <CommentHeader>
            <FlexRow gap={5} alignItems="center">
              <BLS>{comment.user.userName}</BLS>
              {getPost.data?.user.id === comment.user.id && (
                <AuthorTag>작성자</AuthorTag>
              )}
            </FlexRow>
            <FlexRow>
              {getUser.data?.id === comment.user.id && (
                <FlexRow gap={5}>
                  <ActionButton>수정</ActionButton>
                  <ActionButton>삭제</ActionButton>
                </FlexRow>
              )}
            </FlexRow>
          </CommentHeader>
          <FlexColumn gap={3}>
            <CommentActions>
              <BM>{comment.content}</BM>
            </CommentActions>
            <FlexRow width="100%" justifyContent="space-between">
              <CommentTime>
                {DateUtil.utcToLocalYYYYMMDDHHmm(comment.createdAt)}
              </CommentTime>
              {type === "children" && (
                <FavoriteComponent
                  clickedTargetId={comment.id}
                  favoriteLength={comment.commentFavorites.length}
                  checkUserFavorite={checkUserFavorite}
                  onClickFavorite={onClickFavorite}
                />
              )}
            </FlexRow>
          </FlexColumn>
          {type === "parent" && (
            <FlexRow justifyContent="space-between">
              <ActionButton onClick={() => setOpenChildren((prev) => !prev)}>
                답글
              </ActionButton>
              <FavoriteComponent
                clickedTargetId={comment.id}
                favoriteLength={comment.commentFavorites.length}
                checkUserFavorite={checkUserFavorite}
                onClickFavorite={onClickFavorite}
              />
            </FlexRow>
          )}
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
          <Button type="primary" onClick={closeChildrenComment}>
            취소
          </Button>
        </FlexRow>
      )}
    </>
  );
};

export default CommentInfo;
