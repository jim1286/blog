import { FlexRow, IconWrap } from "@/components";
import { H5 } from "@/theme";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  tabKey: string;
  tabName: string;
  icon: JSX.Element;
}

const Tab: React.FC<Props> = ({ tabKey, tabName, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentTab = tabKey === location.pathname;

  return (
    <Container onClick={() => navigate(tabKey)}>
      <FlexRow
        gap={5}
        justifyContent="center"
        alignItems="center"
        style={{ display: "flex" }}
      >
        <IconWrap icon={icon} />
        {tabName}
      </FlexRow>
      {isCurrentTab && <ActiveTab />}
    </Container>
  );
};

export default Tab;

const Container = styled(H5)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 30px;
  cursor: pointer;
`;

const ActiveTab = styled.div`
  width: 100%;
  border-bottom: 2px solid;
`;
