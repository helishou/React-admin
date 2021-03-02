import React, { Component } from "react";
import "./index.less";
import { Menu, Switch } from "antd";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../../assets/image/logo.png";
/* 
左侧导航的组件
 */
const { SubMenu } = Menu;
export default class LeftNav extends Component {
  state = {
    theme: "dark",
    current: "1",
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <>
        <div>
          <Link to="/" className="left-nav-header">
            <img src={logo} alt="logo" />
            <h1>硅谷后台</h1>
          </Link>
        </div>

        <br />

        <Switch
          checked={this.state.theme === "dark"}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<MailOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="1" icon={<MailOutlined />}>
              <Link to="/category">品类管理</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MailOutlined />}>
              <Link to="/product">商品管理</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="3" icon={<MailOutlined />}>
            <Link to="/users">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link to="/role">角色管理</Link>
          </Menu.Item>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="图形图标">
            <Menu.Item key="5" icon={<MailOutlined />}>
              <Link to="/charts/bar">线图</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>
              <Link to="/charts/pie">饼图</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<MailOutlined />}>
              <Link to="/charts/line">折线图</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
