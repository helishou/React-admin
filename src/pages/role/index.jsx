import React, { Component } from "react";
import { Card, Button, Table } from "antd";
import { PAGE_SIZE } from "../../utils/constant";
import {reqRoleList} from '../../api'
/* 角色路由 */
export default class Role extends Component {
  state = {
    loading:false,
    roles: [
    ],
    role:{},

  };
  getRoles = async() =>{
      const result= await reqRoleList()
        if(result.status===0){
            const roles= result.data
            this.setState({
                roles
            })
        }
  } 
  initColumn = () => {
    this.columns = [
      {
        title: "角色名称",
        dataIndex: "name",
      },
      {
        title: "创建时间",
        dataIndex: "create_time",
      },
      {
        title: "授权时间",
        dataIndex: "auth_time",
      },
      {
        title: "授权人",
        dataIndex: "auth_name",
      },
    ];
  };
  componentDidMount(){
    this.getRoles()
  }
  UNSAFE_componentWillMount(){
    this.initColumn()
  }
  render() {
    const { roles,role } = this.state;
    const title = (
      <span>
        <Button type="primary">创建角色</Button>
        <Button type="primary" disabled={role._id?true:false}>
          设置角色权限
        </Button>
      </span>
    );
    
    // console.log(roles)
    console.log(this.columns)
    return (
        
      <Card title={title}>
        <Table
          rowKey="_id"
          pagination={{
            pageSize: PAGE_SIZE,
            // , total: 50
          }}
          dataSource={roles}
          columns={this.columns}
          loading={this.state.loading}
          rowSelection={{ type: "radio" ,selectedRowKeys:[role._id]}}//设置单选
          onRow={role => {
            return {
              onClick: event => {
                  console.log(role)
                  this.setState({role})
                }, // 点击行
              onDoubleClick: event => {},
              onContextMenu: event => {},
              onMouseEnter: event => {}, // 鼠标移入行
              onMouseLeave: event => {},
            };
          }
        }
        bordered
        />
      </Card>
    );
  }
}
