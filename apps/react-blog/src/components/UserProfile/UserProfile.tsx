import { BSS } from "@/theme";
import React from "react";
import { Container, UserThumbnail, PostText } from "./styles";

interface Props {
  userName: string;
  thumbnailUrl?: string;
}

const UserProfile: React.FC<Props> = ({ userName, thumbnailUrl }) => {
  return (
    <Container>
      <UserThumbnail
        src={thumbnailUrl}
        style={{ background: `${thumbnailUrl || "black"}` }}
      />
      <PostText>by</PostText>
      <BSS>{userName}</BSS>
    </Container>
  );
};

export default UserProfile;
