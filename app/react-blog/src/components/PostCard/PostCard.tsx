import { PostEntityResponse } from "@/http";
import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexColumn, FlexRow } from "../BaseStyle";
import { BM, H5 } from "@/theme";

interface Props {
  post: PostEntityResponse;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const theme = useTheme();

  return (
    <Container>
      <FlexRow height="150px" backgroundColor="black"></FlexRow>
      <FlexColumn>
        <H5>{post.title}</H5>
        <BM>{post.subTitle}</BM>
      </FlexColumn>
      <FlexRow style={{ flex: 1 }}>{post.userId}</FlexRow>
      <FlexRow
        height="40px"
        style={{
          borderTop: `1px solid ${theme.border.tertiary}`,
          padding: "10px",
        }}
      >
        {post.content}
      </FlexRow>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 350px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
