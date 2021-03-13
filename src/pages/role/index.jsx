import React, { Component } from "react";
import { Card, Button, Table ,Modal, message} from "antd";
import { PAGE_SIZE } from "../../utils/constant";
import {reqRoleList,reqAddRole} from '../../api'
import AddForm from './add-form.jsx'
/* 角色路由 */
export default class Role extends Component {
  state = {
    loading:false,
    roles: [
    ],
    role:{},
    showStatus:0,
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
  handleCancel = () => {
    this.setState({ showStatus: 0 });
  };
  addRole = async() => {
    console.log(this.input.props.value)
    const result =await reqAddRole(this.input.props.value)
    console.log(result)
    if(result.status===0){
      message.success('添加角色成功')
      // this.getRoles()
      // 可以不请求直接添加到roles列表
      const role = result.data
      // const roles =[...this.state.roles]
      // roles.push(role)
      // this.setState({roles:roles})
      this.setState(state=>({
        roles:[...state.roles,role]
      }))
    }else{
      message.error('添加角色失败')
    }
    this.setState({ showStatus: 0 });
  };
  
  componentDidMount(){
    this.getRoles()
  }
  UNSAFE_componentWillMount(){
    this.initColumn()
  }
  render() {
    const { roles,role,showStatus } = this.state;
    const title = (
      <span>
        <Button type="primary" onClick={()=>this.setState({showStatus:1})}>创建角色</Button>
        <Button type="primary" onClick={()=>this.setState({showStatus:2})} disabled={!role._id}>
          设置角色权限
        </Button>
      </span>
    );
    
    // console.log(roles)
    // console.log(this.columns)
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
        <Modal
          title="添加角色"
          visible={showStatus === 1}
          onOk={this.addRole}
          onCancel={this.handleCancel}
          destroyOnClose={true}

        >
          <AddForm
          
            
            categoryName
            setInput={(input) => {
              this.input = input;
            }}
          />
        </Modal>
        <Modal
          title="添加角色"
          visible={showStatus === 2}
          onOk={this.addRole}
          onCancel={this.handleCancel}
          destroyOnClose={true}

        >
          <AddForm
          
            
            categoryName
            setInput={(input) => {
              this.input = input;
            }}
          />
        </Modal>
      </Card>
      
    );
  }
}
