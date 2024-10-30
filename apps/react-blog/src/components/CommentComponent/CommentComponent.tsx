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
} from "./styles";
import { CommentEntityResponse } from "@blog/types";
import { DateUtil } from "@/utils";
import { BLS, BM } from "@/theme";
import { FlexRow } from "../BaseStyle";
import { IconHeart } from "@tabler/icons-react";

interface Props {
  isAuthor: boolean;
  comment: CommentEntityResponse;
}

const CommentComponent: React.FC<Props> = ({ isAuthor, comment }) => {
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
          </FlexRow>
          <FlexRow gap={5}>
            <CommentTime>
              {DateUtil.utcToLocalYYYYMMDDHHmm(comment.createdAt)}
            </CommentTime>
            <IconHeart size={15} />
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
