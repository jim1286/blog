import React from "react";
import {
  Body,
  Container,
  Content,
  Footer,
  Length,
  Thumbnail,
  Title,
  Wrap,
} from "./styles";
import { Post } from "@/interface";
import { DateUtil } from "@/utils";
import { FlexColumn } from "../BaseStyle";
import { useTheme } from "styled-components";

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
            paddingBottom: "5px",
            borderBottom: `1px solid ${theme.border.tertiary}`,
          }}
        >
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <Length>{DateUtil.utcToLocalYYYYMMDD(post.createdAt)}</Length>
        </FlexColumn>
        <Footer>
          <Wrap>
            <Length>{post.userId}</Length>
          </Wrap>
        </Footer>
      </Body>
    </Container>
  );
};

export default PostComponent;
