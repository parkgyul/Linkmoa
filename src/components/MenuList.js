import { Menu } from "antd";
import { HomeOutlined, BarsOutlined } from "@ant-design/icons";
const MenuList = () => {
  return (
    <Menu mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.SubMenu key="sub" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;
