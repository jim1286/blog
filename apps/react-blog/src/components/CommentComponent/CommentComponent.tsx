import React from "react";
import { Container } from "./styles";
import { CommentEntityResponse } from "@blog/types";
import { useUpdateCommentFavoriteMutation } from "@/queries";
import { CommentInfo } from "./components";

interface Props {
  comment: CommentEntityResponse;
  postId: string;
}

const CommentComponent: React.FC<Props> = ({ comment, postId }) => {
  const updateCommentFavorite = useUpdateCommentFavoriteMutation();

  const handleClickFavorite = async (commentId: string) => {
    try {
      await updateCommentFavorite.mutateAsync({ commentId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <CommentInfo
        key={comment.id}
        type="parent"
        comment={comment}
        postId={postId}
        onClickFavorite={handleClickFavorite}
      />
      {comment.children.map((child) => (
        <CommentInfo
          key={child.id}
          type="children"
          comment={child}
          postId={postId}
          onClickFavorite={handleClickFavorite}
        />
      ))}
    </Container>
  );
};

export default CommentComponent;
