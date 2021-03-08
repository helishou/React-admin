import React, { Component } from 'react'
import {Card,Select,Input,Button,Table}from 'antd'
import {} from '@ant-design/icons'
import LinkButton from '../../component/link-button'
import {reqProducts} from '../../api/'
import {PAGE_SIZE} from '../../util/constant'
/* 默认字路由 */
const Option = Select.Option
export default class Home extends Component {
    state={
        products:[],
    }
    /* 获取指定页码的料表数据 */
    getProducts=async (pageNum)=>{
        const result =await reqProducts(pageNum,3);
        console.log(result);
        if(result.status===200){
            this.setState({products:result.data.data.list})
        }
    }
    UNSAFE_componentWillMount(){
            this.columns = [
                {
                    width:300,
                  title: '商品名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '商品描述',
                  dataIndex: 'desc',
                  key: 'desc',
                },
                {
                    width:100,
                  title: '价格',
                  dataIndex: 'price',
                  key: 'price',
                  render:(price) => '￥'+price
                  
                },
                {
                    width:150,
                  title: '状态',
                  dataIndex: 'status',
                  key: 'status',
                  render:(status) => {
                      return status?<span>
                      <Button type='primary'>下架</Button>
                      <span>在售</span></span>:<span>
                      <Button type='primary'>上架</Button>
                      <span>下架</span></span>
                  }
                },
                {
                    width:100,
                  title: '操作',
                  dataIndex: 'action',
                  key: 'action',
                  render:()=>{
                    return <span><LinkButton>详情</LinkButton>
                    <LinkButton>修改</LinkButton></span>
                  }
                },
              ];    
    }
    componentDidMount(){
        this.getProducts(1);
    }
    render() {
        const title=(
            <span><Select style={{width:150}}><Option value='1' >按名称搜索</Option></Select><Input style={{width:200}} placeholder='关键字'/><Button type='primary'>搜索</Button></span>)
        const extra=(
            <button></button>)
              
      
        return (
            
            <Card title={title} extra={extra}>
                <Table bordered rowKey='_id' dataSource={this.state.products} columns={this.columns} />;
            </Card>
        )
    }
}
