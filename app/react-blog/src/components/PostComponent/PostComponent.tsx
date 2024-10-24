import React from "react";
import {
  Body,
  Container,
  Content,
  Footer,
  PostText,
  Thumbnail,
  Title,
  UserThumbnail,
  Wrap,
} from "./styles";
import { Post } from "@/interface";
import { DateUtil } from "@/utils";
import { FlexColumn } from "../BaseStyle";
import { useTheme } from "styled-components";
import { BSS } from "@/theme";

interface Props {
  post: Post;
}

const PostComponent: React.FC<Props> = ({ post }) => {
  const theme = useTheme();

  return (
    <Container>
      <Thumbnail />
      <Body>
        <FlexColumn
          gap={5}
          style={{
            padding: "10px 15px",
            borderBottom: `1px solid ${theme.border.tertiary}`,
          }}
        >
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <PostText>{DateUtil.utcToLocalYYYYMMDD(post.createdAt)}</PostText>
        </FlexColumn>
        <Footer>
          <Wrap>
            <UserThumbnail
              src={post.user.thumbnailUrl}
              style={{ background: `${post.user.thumbnailUrl || "black"}` }}
            />
            <PostText>by</PostText>
            <BSS>{post.user.userName}</BSS>
          </Wrap>
        </Footer>
      </Body>
    </Container>
  );
};

export default PostComponent;
