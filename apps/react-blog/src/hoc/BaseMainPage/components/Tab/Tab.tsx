import React from "react";
import { FlexRow } from "@/components";
import { BM } from "@/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ActiveTab } from "./styles";
import { useGetUserQuery } from "@/queries";

interface Props {
  tabKey: string;
  tabName: string;
  icon: JSX.Element;
}

const Tab: React.FC<Props> = ({ tabKey, tabName, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const getUser = useGetUserQuery();
  const isCurrentTab = tabKey === location.pathname;

  if (!getUser.data && tabKey !== "/recent") {
    return null;
  }

  return (
    <Container onClick={() => navigate(tabKey)}>
      <FlexRow gap={2} alignItems="center" style={{ display: "flex" }}>
        {icon}
        <BM>{tabName}</BM>
      </FlexRow>
      {isCurrentTab && <ActiveTab />}
    </Container>
  );
};

export default Tab;
