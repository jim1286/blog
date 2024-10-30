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
} from "./styles";
import { DateUtil } from "@/utils";
import { PostEntityResponse } from "@blog/types";
import NoImage from "../../../public/images/NoImage.png";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "..";

interface Props {
  post: PostEntityResponse;
}

const PostComponent: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/post/${post.id}`)}>
      <Thumbnail
        src={post.thumbnailUrl || NoImage}
        thumbnailMode={!!post.thumbnailUrl}
      />
      <Body>
        <ContentWrap>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <PostText>{DateUtil.utcToLocalYYYYMMDDHHmm(post.createdAt)}</PostText>
        </ContentWrap>
        <Footer>
          <UserProfile
            thumbnailUrl={post.user.thumbnailUrl}
            userName={post.user.userName}
          />
        </Footer>
      </Body>
    </Container>
  );
};

export default PostComponent;
