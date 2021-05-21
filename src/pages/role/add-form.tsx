import React, { PureComponent } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

interface IProps {
  setInput: Function;
}
const Item = Form.Item;
// const Option = Select.Option;
export default class AddForm extends PureComponent<IProps> {
  static propTypes = {
    setInput: PropTypes.func.isRequired,
  };
  render() {
    // const { categorys } = this.props;
    const formItemLayout = {
      labelCol: { span: 4 }, //左侧label宽度
      wrapperCol: { span: 10 }, //右侧包裹输入框宽度
    };
    return (
      <Form>
        {/* <Form onValuesChange={this.onFinish}> */}
        <Item
          {...formItemLayout}
          label="角色名称"
          name="username"
          rules={[{ required: true, message: "名称必须输入!" }]}
        >
          <Input
            placeholder="请输入角色名称"
            ref={(input) => {
              this.props.setInput(input);
            }}
          ></Input>
        </Item>
      </Form>
    );
  }
}
