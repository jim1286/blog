import React from "react";
import {
  Body,
  Container,
  Content,
  ContentWrap,
  Footer,
  PostText,
  Thumbnail,
  Title,
  UserThumbnail,
  Wrap,
} from "./styles";
import { Post } from "@/interface";
import { DateUtil } from "@/utils";
import { BSS } from "@/theme";

interface Props {
  post: Post;
}

const PostComponent: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <Thumbnail />
      <Body>
        <ContentWrap>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <PostText>{DateUtil.utcToLocalYYYYMMDD(post.createdAt)}</PostText>
        </ContentWrap>
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
