import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import React, { Component } from "react";
import './index.less'
export default class LoginForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    // 

  };
  onFinishFailed=(values, errorFields, outOfDate)=>{
    console.log('校验失败')
    values.errorFields.map(x=>{
      console.log(x.errors)
    })
    // console.log('value------',values)
  }
  validatePwd=(rule,value,callback)=>{
    // console.log(value)
    if(!value){
      callback('密码必须输入')
    }else if(value.length<4){
      callback('密码不能小于4')
    }else if(value.length>12){
      callback('密码不能大于12')
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      callback('密码必须由大小写字母或者数字组成')
    }else{
      callback()//验证通过
    }

  }
  render() {
    return (
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
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
            {
                 min:3,
                 message: "最小5位",    
              },                    
            {
                max:15,
                message: "最大10位",    
             },
            {
                pattern:/^[a-zA-Z0-9_]+$/,
                message: "必须是英文,数字或下划线组成",    
             },

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
              message: "请输入密码!",
            },
            {
              validator:this.validatePwd,
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
