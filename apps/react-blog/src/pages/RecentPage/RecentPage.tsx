import React, { useState } from "react";
import { Body, Container, Header, SearchWrap, Wrap } from "./styles";
import { H4, BM } from "@/theme";
import { Input, FlexRow, PostComponent } from "@/components";
import { useNavigate } from "react-router-dom";
import { useGetPostListAllQuery } from "@/queries";

const RecentPage: React.FC = () => {
  const navigate = useNavigate();
  const getPostListAll = useGetPostListAllQuery();
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
          <H4>최신 게시물</H4>
          <BM>총 {getPostListAll.data?.length}개의 게시물이 검색되었습니다.</BM>
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
          {getPostListAll.data?.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </Body>
      </Container>
    </Wrap>
  );
};

export default RecentPage;
