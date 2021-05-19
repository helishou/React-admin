import React, { Component } from "react";
import { Form, Select, Input } from "antd";

type Props = {
  setClasses: any;
  setInput: any;
  categorys: Array<any>;
};
const Item = Form.Item;
const Option = Select.Option;
export default class AddForm extends Component<Props> {
  render() {
    const { categorys } = this.props;
    return (
      <Form>
        <Item initialValue="0" name="classer">
          <Select ref={(input: any) => this.props.setClasses(input)}>
            <Option key="0" value="0">
              一级分类
            </Option>
            {categorys.map((c) => (
              <Option value={c._id} key={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
        </Item>
        <Item
          name="username"
          rules={[{ required: true, message: "名称必须输入!" }]}
        >
          <Input
            placeholder="请输入分类名称"
            ref={(input) => this.props.setInput(input)}
          ></Input>
        </Item>
      </Form>
    );
  }
}
