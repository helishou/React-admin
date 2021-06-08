/*
 * @Author       : helishou
 * @Date         : 2021-05-19 17:27:55
 * @LastEditTime : 2021-06-08 10:42:22
 * @LastEditors  : helishou
 * @Description  : 主路由
 * @FilePath     : \src\pages\admin\index.tsx
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { connect } from "react-redux";

// import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../component/left-nav/index.jsx";
import Header from "../../component/header";
import Home from "../home";
import Category from "../category";
import Role from "../role";
import Bar from "../charts/bar/index";
import Line from "../charts/line/index";
import Pie from "../charts/pie/index";
import Users from "../users";
import Product from "../product";
import NotFound from "../not-found/index";
import Test from "../test";
const { Footer, Sider, Content } = Layout;
type Props = {
  user: any;
};
class Admin extends Component<Props> {
  render() {
    const user = this.props.user;
    // 如果内存中没有存储user ==>当前没登陆
    if (!user || !user._id) {
      //自动跳转到登陆
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Layout style={{ height: "100%", width: "100%" }}>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            {/* 设置固定侧边栏 */}
            <LeftNav />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header>Header</Header>
            <Content style={{ margin: 20, backgroundColor: "white" }}>
              <Switch>
                <Redirect exact={true} from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/category" component={Category} />
                <Route path="/product" component={Product} />
                <Route path="/role" component={Role} />
                <Route path="/user" component={Users} />
                <Route path="/charts/bar" component={Bar} />
                <Route path="/charts/line" component={Line} />
                <Route path="/charts/pie" component={Pie} />
                <Route path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              推荐使用谷歌浏览器，来获得更佳操作体验
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default connect<{ user: any }, {}, {}, { user: any }>(
  (state) => ({ user: state.user }),
  {}
)(Admin);
