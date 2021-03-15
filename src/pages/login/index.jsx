import React, { Component } from "react";
import logo from "../../assets/image/logo.png";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {Redirect} from 'react-router-dom'
import "./index.less";
import { reqLogin } from "../../api/index.js";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

export default class Login extends Component {
  onFinish = async (values) => {
    //console.log("Received values of form: ", values);
    //
    // console.log('this----',this)
    const { username, password } = values;
    try {
      const response = await reqLogin(username, password);
      // .then(response=>{
      //   console.log('成功了',response.data)
      // }).catch(error=>{
      //   console.log('失败了',error.message)}
      // );
      console.log("请求成功", response);
      const result = response; //{state:0,data:user} {state:1,msg:'xxxx'}
      if (result.status === 0) {
        //登陆成功
        message.success("登录成功");
        //跳转到管理界面
        const user = result.data;
        memoryUtils.user = user;
        storageUtils.saveUser(user);
        // //console.log(this);
        this.props.history.push("/");
      } else {
        // 登录失败.提示错误信息
        message.error(result.msg);
      }
    } catch (error) {
      //console.log("请求出错", error);
    }
  };
  onFinishFailed = (values, errorFields, outOfDate) => {
    //console.log("校验失败");
    values.errorFields.map((x) => {
      return //console.log(x.errors);
    });
    // //console.log('value------',values)
  };
  validatePwd = (rule, value, callback) => {
    // //console.log(value)
    if (!value) {
      callback("密码必须输入");
    } else if (value.length < 4) {
      callback("密码不能小于4");
    } else if (value.length > 12) {
      callback("密码不能大于12");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密码必须由大小写字母或者数字组成");
    } else {
      callback(); //验证通过
    }
  };
  render() {
    //如果用户已经登陆,自动跳转到管理页面
    const user = memoryUtils.user;
    if (user&&user._id) {
      
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React項目:後台管理系統</h1>
        </header>
        <section className="login-content">
          <h2>用戶登陸</h2>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              initialValue="admin"
              rules={[
                {
                  required: true,
                  message: "请输入用户名!",
                },
                {
                  min: 3,
                  message: "最小5位",
                },
                {
                  max: 15,
                  message: "最大10位",
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "必须是英文,数字或下划线组成",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue="admin"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
                {
                  validator: this.validatePwd,
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登陸
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
