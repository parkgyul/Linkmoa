import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";

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
    <>
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
            <Button type="text" className="bell" icon=<BellOutlined /> />
          </header>
          <Content className="content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Main />
          </Content>
        </Layout>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
