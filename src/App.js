import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Main from "./components/Main";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import inDirectory from "./components/inDirectory";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        className="sidebar"
      >
        <Logo />
        <MenuList />
      </Sider>
      <Layout>
        <header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={toggleCollapsed}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <Button type="text" className="bell" icon={<BellOutlined />} />
        </header>
        <Content className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/inDirectory" element={<inDirectory />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
