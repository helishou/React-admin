import React, { Component } from "react";
import { Card, Table, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LinkButton from "../../component/link-button";
import {
  reqCategorys,
  reqUpdateCategory,
  reqAddCategory,
} from "../../api/index";
export default class Category extends Component {
  state = {
    categorys: [],
    subCategorys:[],//二级分类列表
    loading:false,
    parentId:'0',//当前需要显示的分类ID
    parentName:'',//当前需要显示的分类名称

  };
  /*
  /* 異物获取一级或者耳机分类列表显示 */
  getCategorys = async () => {
      this.setState({loading:true})
      const {parentId} = this.state
    const result = await reqCategorys("0");
    this.setState({loading:false})
    if (result.data.status === 0) {

      //去除分类数组
      const categorys = result.data.data;
      if(parentId==='0'){
        this.setState({ categorys });
      }else{
        this.setState({subCategorys:categorys})
      }
      // console.log(categorys)
      
    }else{
      message.error('获取分类列表失败')
    }
  };
  /* 准备数据 */
  componentWillMount() {
    // reqCategorys,reqUpdateCategory,reqAddCategory,
    this.columns = [
        {
          title: "分类名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "操作",
          width: 300,
          key: "action",
          dataIndex: "",
          render: () => (
            <span>
              <LinkButton>修改分类</LinkButton>{" "}
              <LinkButton>查看子分类</LinkButton>
            </span>
          ),
        },
      ];
  }
  /* 执行异步任务 */
  componentDidMount() {
    this.getCategorys();
  }
  render() {
    //card左侧

    const title = "一级分类列表";
    //card右侧
    const extra = (
      <Button icon={<PlusOutlined />} type="primary">
        添加
      </Button>
    );
    {console.log(this.columns)}
    return (
        
      <Card title={title} extra={extra}>
        <Table
          rowKey="_id"
          pagination={{ pageSize: 5, total: 50 }}
          dataSource={this.state.categorys}
          columns={this.columns}
          loading={this.state.loading}
        />
      </Card>
    );
  }
}
