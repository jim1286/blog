import React from "react";
import { Header, Tab } from "./components";
import { Outlet } from "react-router-dom";
import { IconHome, IconPlus, IconTimeline } from "@tabler/icons-react";
import { Container, Tabs } from "./styles";

const tabs = [
  {
    key: "/recent",
    tabName: "최신",
    icon: <IconTimeline size={20} />,
  },
  {
    key: "/my/post",
    tabName: "내 게시물",
    icon: <IconHome size={20} />,
  },
  {
    key: "/my/create",
    tabName: "게시물 작성",
    icon: <IconPlus size={20} />,
  },
];

const BaseMainPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tabs>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            tabKey={tab.key}
            tabName={tab.tabName}
            icon={tab.icon}
          />
        ))}
      </Tabs>
      <Outlet />
    </Container>
  );
};

export default BaseMainPage;
