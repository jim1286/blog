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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;
`;
