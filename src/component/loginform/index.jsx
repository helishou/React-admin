import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import React, { Component } from "react";
import './index.less'
export default class LoginForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    // 

  };
  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
            // {
            //      min:3,
            //      message: "最小5位",    
            //   },                    
            // {
            //     max:15,
            //     message: "最大10位",    
            //  },
            {
              validator:async(rule,value,callback)=>{
                const reg =new RegExp("[\\u4E00-\\u9FFF]+","g")
                if(reg.test(value)&&value.length>5){
                  callback("中文最多5位");
                }else if(value.length>10){
                  callback('非中文最多10位')
                }else{
                  callback();
                }
              }
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
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
    );
  }
}
