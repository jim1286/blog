import React from "react";
import {
  Container,
  AvatarImage,
  CommentContent,
  CommentHeader,
  CommentTime,
  CommentActions,
  ActionButton,
} from "./styles";
import { CommentEntityResponse } from "@blog/types";
import { DateUtil } from "@/utils";
import { BM, H6 } from "@/theme";

interface Props {
  comment: CommentEntityResponse;
}

const CommentComponent: React.FC<Props> = ({ comment }) => {
  return (
    <Container>
      <AvatarImage
        src={comment.user.thumbnailUrl}
        style={{ background: `${comment.user.thumbnailUrl || "black"}` }}
      />
      <CommentContent>
        <CommentHeader>
          <H6>{comment.user.userName}</H6>
          <CommentTime>
            {DateUtil.utcToLocalYYYYMMDD(comment.createdAt)}
          </CommentTime>
        </CommentHeader>
        <BM>{comment.content}</BM>
        <CommentActions>
          <ActionButton>Reply</ActionButton>
          <ActionButton>Edit</ActionButton>
          <ActionButton>Delete</ActionButton>
        </CommentActions>
      </CommentContent>
    </Container>
  );
};

export default CommentComponent;
