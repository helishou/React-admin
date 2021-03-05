import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
const Item = Form.Item
const Option = Select.Option
export default class AddForm extends Component {
    render() {
        return (
            <Form>
                <Item>
                <Select defaultValue='0'>
                    <Option value='0'>一级分类</Option>
                    <Option value='1'>电脑</Option>
                    <Option value='2'>图书</Option>
                </Select>
                </Item>
                <Item>
                <Input placeholder='请输入分类名称'></Input>
                </Item>
                {/* <Item></Item><Input></Input>
                <Input></Input> */}
            </Form>
        )
    }
}
