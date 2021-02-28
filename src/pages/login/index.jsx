import "./index.less";
import React, { Component } from "react";
// import { PageHeader } from "antd";
// import { Layout } from "antd";
import logo from "./image/logo.png";
// const { Header, Footer, Sider, Content } = Layout;
import LoginForm from '../../component/loginform'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className='login-header'>
        <img src={logo} alt="logo"/><h1>React項目:後台管理系統</h1>
        </header>
        <section className='login-content'><h2>用戶登陸</h2>
        <LoginForm/>
        </section>
      </div>
    );
  }
}
