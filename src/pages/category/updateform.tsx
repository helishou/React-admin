/*
 * @Author: helishou
 * @Date: 2021-05-19 22:03:41
 * @Last Modified by: helishou
 * @Last Modified time: 2021-05-19 22:08:55
 */
import React, { Component } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";
import { CategoryModel, ICategory } from "./Model";
const Item = Form.Item;
interface IUpdateFormProps {
  category: string;
  onCancel?: () => void;
  updateCategory?: (category: ICategory) => void;
  setForm: any;
}
export default class UpdateForm extends Component<IUpdateFormProps> {
  static propTypes = {
    category: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired,
  };

  render() {
    const { category } = this.props;
    return (
      <Form>
        <Item
          name="username"
          initialValue={category ? category : ""}
          rules={[{ required: true, message: "名称必须输入!" }]}
        >
          <Input
            placeholder="请输入分类名称"
            ref={(input) => this.props.setForm(input)}
          ></Input>
        </Item>
      </Form>
    );
  }
}
