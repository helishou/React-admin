import React, { Component } from "react";
import memoryUtils from "../../utils/memoryUtils";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    // 如果内存中没有存储user ==>当前没登陆
    if (!user || !user._id) {
      //自动跳转到登陆
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Layout style={{height:'100%'}}>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}
