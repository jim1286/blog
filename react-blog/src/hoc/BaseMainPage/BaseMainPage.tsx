import React from "react";
import styled from "styled-components";
import { Header, Tab } from "./components";
import { FieldTimeOutlined, LineChartOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const tabs = [
  { key: "/recent", tabName: "최신", icon: <FieldTimeOutlined /> },
  { key: "/trend", tabName: "트렌드", icon: <LineChartOutlined /> },
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

const Container = styled.div`
  padding: 20px 15%;
  width: 100%;
  height: 100%;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  gap: 20px;
`;
