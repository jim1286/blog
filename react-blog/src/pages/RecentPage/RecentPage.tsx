import { PostCard } from "@/components";
import { useGetPostListAllQuery } from "@/queries";
import React from "react";
import styled from "styled-components";

export const RecentPage: React.FC = () => {
  const getPostListAll = useGetPostListAllQuery();

  if (getPostListAll.isLoading) {
    return null;
  }

  return (
    <Container>
      {getPostListAll.data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default RecentPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;
