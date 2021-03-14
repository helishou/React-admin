import React, { Component } from 'react'
import {Button, Card,Table,Modal, message} from 'antd'
import {PAGE_SIZE} from '../../utils/constant'
import { formateDate } from '../../utils/dataUtils'
import LinkButton from '../../component/link-button'
import  {reqUsers} from '../../api'
export default class Users extends Component {
    state = {
        users:[],//所有用户列表
        showStatus:0,
        roles:[]
    }
    initColumns = ()=>{
        this.columns=[
        {
            title:'用户名',
            dataIndex:'username',
        },
        {
            title:'邮箱',
            dataIndex:'email',
        },
        {
            title:'电话',
            dataIndex:'phone',
        },
        {
            title:'注册时间',
            dataIndex:'create_time',
            render: (create_time)=>formateDate(create_time)
        },
        {
            title:'所属角色',
            dataIndex:'role_id',
            render:(role_id) =>
            // {
            //     const role=this.state.roles.find(role=>role._id===role_id)
            //     return role?role.name:''}
            //防止反复生成
            this.roleNames[role_id]
        },
        {
            title:'操作',
            render:(user)=>(
                <span>
                    <LinkButton>修改</LinkButton>
                    <LinkButton>删除</LinkButton>
                </span>
            )
        },
    ]
    }
    /* 根据role数据,生成包含所有角色名的对象 */
    initRoles=(roles)=>{
        
        this.roleNames = roles.reduce((pre,role)=>{
            pre[role._id]=role.name?role.name:''
            return pre
        },[])
    }
    getUsers=async ()=>{
        const result =await  reqUsers()
        if(result.status===0){
      
            
            const {users,roles}= result.data
            this.initRoles(roles)
            // console.log(roles.find(role=>role._id==="5ff5ab2fa4aca2121c004675").name)
            this.setState({users,roles})
        }else{
            message.error('获取角色列表失败')
        }
    }
    UNSAFE_componentWillMount(){
        this.initColumns()
    }
    componentDidMount(){
        this.getUsers()
    }
    handleCancel=()=>{
        this.setState({showStatus:0})
    }
    render() {
        const {users,showStatus} = this.state
        const title =<Button type='primary' onClick={()=>{this.setState({showStatus:1})}}>创建用户</Button>
        return (
            <Card title={title}>
        <Table
          rowKey="_id"
          pagination={{
            pageSize: PAGE_SIZE,
            // , total: 50
          }}
          dataSource={users}
          columns={this.columns}
        //   loading={this.state.loading}
        //   rowSelection={{ type: "radio", selectedRowKeys: [role._id] }} //设置单选
        //   onRow={(role) => {
        //     return {
        //       onClick: (event) => {
        //         this.setState({ role });
        //       }, // 点击行
        //       onDoubleClick: (event) => {},
        //       onContextMenu: (event) => {},
        //       onMouseEnter: (event) => {}, // 鼠标移入行
        //       onMouseLeave: (event) => {},
        //     };
        //   }}
          bordered
        />
        <Modal
          title="添加角色"
          visible={showStatus === 1}
          onOk={this.addRole}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          
        </Modal>
        {/* <Modal
          title="设置角色权限"
          visible={showStatus === 2}
          onOk={this.setRole}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <SetTree role={role} ref={this.auth}/>
        </Modal> */}
      </Card>
        )
    }
}
