import React from "react";
import { Header, Tab } from "./components";
import { Outlet } from "react-router-dom";
import { IconTimeline, IconTrendingUp } from "@tabler/icons-react";
import { Container, Tabs } from "./styles";

const tabs = [
  {
    key: "/recent",
    tabName: "최신",
    icon: <IconTimeline />,
  },
  {
    key: "/trend",
    tabName: "트렌드",
    icon: <IconTrendingUp />,
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
