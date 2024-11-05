import {
  useCreateCommentMutation,
  useGetCommentListQuery,
  useGetPostQuery,
  useGetUserQuery,
  useUpdatePostFavoriteMutation,
} from "@/queries";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ActionButton, Container } from "./styles";
import MDEditor from "@uiw/react-md-editor";
import { BM, H4, H5 } from "@/theme";
import {
  CommentComponent,
  DeletePostModal,
  FavoriteComponent,
  FlexColumn,
  FlexRow,
  Input,
  Tag,
  UserProfile,
} from "@/components";
import { Button } from "antd";
import { useTheme } from "styled-components";
import { useKeyDown } from "@/hooks";

const PostPage: React.FC = () => {
  const theme = useTheme();
  const { postId } = useParams();
  const getUser = useGetUserQuery();
  const getPost = useGetPostQuery(postId);
  const getCommentList = useGetCommentListQuery(postId);
  const createComment = useCreateCommentMutation();
  const updatePostFavorite = useUpdatePostFavoriteMutation();
  const [content, setContent] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useKeyDown(() => {
    handleSubmitComment();
  }, ["Enter"]);

  const handleSubmitComment = async () => {
    if (!content || !postId || !content.trim()) {
      return;
    }

    try {
      await createComment.mutateAsync({ postId, content });
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickFavorite = async (postId: string) => {
    try {
      await updatePostFavorite.mutateAsync({ postId });
    } catch (error) {
      console.log(error);
    }
  };

  if (!getPost.data || !postId) {
    return null;
  }

  return (
    <Container>
      <FlexRow alignItems="center" justifyContent="space-between">
        <H4>{getPost.data.title}</H4>
        {getUser.data?.id === getPost.data.user.id && (
          <FlexRow gap={5}>
            <ActionButton>수정</ActionButton>
            <ActionButton onClick={() => setOpenDeleteModal(true)}>
              삭제
            </ActionButton>
          </FlexRow>
        )}
      </FlexRow>
      <BM>{getPost.data.subTitle}</BM>
      <FlexRow justifyContent="flex-end">
        <UserProfile
          thumbnailUrl={getPost.data.user.thumbnailUrl}
          userName={getPost.data.user.userName}
        />
      </FlexRow>
      <MDEditor.Markdown
        style={{
          padding: 10,
          background: theme.bg.fill.primary.active,
          border: `1px solid ${theme.border.tertiary}`,
        }}
        source={getPost.data.content}
      />
      <FlexRow
        width="100%"
        alignItems="center"
        gap={10}
        style={{ overflowX: "auto", minHeight: "60px" }}
      >
        {getPost.data.tags.map((ele, index) => (
          <Tag key={index} tagName={ele.content} />
        ))}
      </FlexRow>
      <FlexColumn gap={10}>
        <H5>댓글 작성</H5>
        <Input
          placeholder="댓글을 작성하세요."
          value={content}
          onChange={(value) => setContent(value)}
        />
        <FlexRow width="100%" justifyContent="flex-end">
          <Button
            type="primary"
            disabled={!content || !content.trim()}
            onClick={handleSubmitComment}
          >
            작성하기
          </Button>
        </FlexRow>
      </FlexColumn>
      <FlexColumn width="100%" gap={10}>
        <FlexRow alignItems="center" gap={10}>
          <H5>{getCommentList.data?.length}개의 댓글</H5>
          <FavoriteComponent
            clickedTargetId={postId}
            favoriteLength={getPost.data.postFavorites.length}
            checkUserFavorite={
              !!getPost.data.postFavorites.find(
                (postFavorite) => postFavorite.userId === getUser.data?.id
              )
            }
            onClickFavorite={onClickFavorite}
          />
        </FlexRow>
        <FlexColumn
          width="100%"
          style={{
            border: `1px solid ${theme.border.tertiary}`,
          }}
        >
          {getCommentList.data?.map((comment, index) => (
            <CommentComponent key={index} comment={comment} postId={postId} />
          ))}
        </FlexColumn>
      </FlexColumn>
      <DeletePostModal
        postId={postId}
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      />
    </Container>
  );
};

export default PostPage;
