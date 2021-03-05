import React, { Component } from 'react'
import {Form,Select,Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
const Option = Select.Option
export default class UpdateForm extends Component {
    static propTypes = {
        category:PropTypes.string.isRequired,
        setForm:PropTypes.func.isRequired
    }

    render() {
        const {category} = this.props
        return (
            <Form>
                <Item >
                <Input placeholder='请输入分类名称' defaultValue={category} ref={input =>this.props.setForm(input) } ></Input>
                </Item>
                {/* <Item></Item><Input></Input>
                <Input></Input> */}
            </Form>
        )
    }
}
