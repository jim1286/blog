import React, { useState } from "react";
import { Body, Container, Header, SearchWrap, Wrap } from "./styles";
import { FlexRow, Input, PostComponent } from "@/components";
import { useGetPostListQuery } from "@/queries";
import { H4, BM } from "@/theme";

export const MyPostPage: React.FC = () => {
  const getPostList = useGetPostListQuery();
  // input에 들어갈 용도의 state
  const [inputValue, setInputValue] = useState("");
  // search를 위한 용도의 state
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  const handleClickTag = (tagName: string) => {
    setInputValue(tagName);
    setSearchValue(tagName);
  };

  return (
    <Wrap>
      <Container>
        <Header>
          <H4>나의 게시물</H4>
          <BM>총 {getPostList.data?.length}개의 게시물이 검색되었습니다.</BM>
        </Header>
        <SearchWrap>
          <FlexRow alignItems="center" gap={10}>
            <Input
              placeholder="검색어를 입력하세요"
              onChange={handleInput}
              value={inputValue}
            />
          </FlexRow>
        </SearchWrap>
        <Body>
          {getPostList.data?.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </Body>
      </Container>
    </Wrap>
  );
};

export default MyPostPage;
