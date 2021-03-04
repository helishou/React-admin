import React, { Component } from 'react'
import {Card,Table,Button} from 'antd'
import {PlusOutlined}from '@ant-design/icons'
import LinkButton from '../../component/link-button'
import reqCategorys from '../../api/index'
export default class Category extends Component {
    render() {
        //card左侧
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
            {
                "parentId": "0",
                "_id": "5fe500cecc325b1aceb361ef",
                "name": "123213",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fe5c9adcc325b1aceb361f2",
                "name": "名称6",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fea8d7ccc325b1aceb361fb",
                "name": "名称4",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c0fcc325b1aceb36200",
                "name": "电脑",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c25cc325b1aceb36201",
                "name": "床上用品45",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c2acc325b1aceb36202",
                "name": "手机",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c31cc325b1aceb36203",
                "name": "33",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c37cc325b1aceb36204",
                "name": "文具",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c3ecc325b1aceb36205",
                "name": "交通工具",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9c43cc325b1aceb36206",
                "name": "菜品",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9ec7cc325b1aceb36207",
                "name": "11111",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9ed8cc325b1aceb36208",
                "name": "ffff",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9ee6cc325b1aceb36209",
                "name": "kkk",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9f60cc325b1aceb3620a",
                "name": "asdd",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9fb8cc325b1aceb3620b",
                "name": "jjj",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fed9ffacc325b1aceb3620c",
                "name": "被子2222",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5feda02acc325b1aceb3620d",
                "name": "ooo",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5feda452cc325b1aceb36213",
                "name": "pppp",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5feda473cc325b1aceb36214",
                "name": "llllll",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5feda4decc325b1aceb36215",
                "name": "hhhh1",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5feda579cc325b1aceb36216",
                "name": "恩恩额",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff0869dcc325b1aceb36219",
                "name": "赵机智",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff0869fcc325b1aceb3621a",
                "name": "aaa",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff086edcc325b1aceb3621b",
                "name": "shifou ",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff08716cc325b1aceb3621c",
                "name": "tianjain ",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff1c1e3cc325b1aceb3621d",
                "name": "tianjiale",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff1c2fdcc325b1aceb3621e",
                "name": "dincifenlei",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff43732cc325b1aceb3621f",
                "name": "一级分类test_modify2",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff45cb0cc325b1aceb36221",
                "name": "dingle",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff45d36cc325b1aceb36222",
                "name": "dingle",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff51290cc325b1aceb36224",
                "name": "一级分类test",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff82b2ca4aca2121c00467a",
                "name": "abc",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ff99754a4aca2121c00467f",
                "name": "1",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffa822fa4aca2121c004688",
                "name": "一级分类测试",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffa872ca4aca2121c004689",
                "name": "一级分类测试2",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc1261a4aca2121c00468c",
                "name": "123",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc127da4aca2121c00468e",
                "name": "222333",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc148ea4aca2121c004690",
                "name": "213333",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc14e2a4aca2121c004692",
                "name": "123",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc1dfea4aca2121c004698",
                "name": "22222plp",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc36f6a4aca2121c00469b",
                "name": "分类38",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc47ffa4aca2121c00469c",
                "name": "家用电器",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc4852a4aca2121c00469f",
                "name": "冰箱",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc487aa4aca2121c0046a0",
                "name": "冰箱",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc49ada4aca2121c0046a1",
                "name": "化妆品",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc49eda4aca2121c0046a5",
                "name": "生活用品",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc4a07a4aca2121c0046a6",
                "name": "生活用品",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc4a12a4aca2121c0046a7",
                "name": "生活用品",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffc4d30a4aca2121c0046a9",
                "name": "工具",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffe8e6ca4aca2121c0046ab",
                "name": "机器人2",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffe8f14a4aca2121c0046ae",
                "name": "电视机3",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5ffe932ca4aca2121c0046af",
                "name": "这是本宝宝新添加的内容",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fffb98aa4aca2121c0046b4",
                "name": "分类38",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5fffb9a4a4aca2121c0046b5",
                "name": "一级分类49",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "6001394fa4aca2121c004709",
                "name": "222",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "6001395ea4aca2121c00470a",
                "name": "新的分类",
                "__v": 0
              },
          ];
          
          const columns = [
            {
              title: '分类名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '操作',
              width:300,
              key: 'action',
              dataIndex: '',
              render: () => <span><LinkButton>修改分类</LinkButton>   <LinkButton>查看子分类</LinkButton></span>,
            },
          ];
        const title = '一级分类列表'
        //card右侧
        const extra = (
            <Button icon={<PlusOutlined />} type='primary'>
                添加
            </Button>
        )
        return (
                <Card title={title} extra={extra} >
                <Table rowKey='_id' pagination={{ pageSize: 4,total:50}} dataSource={dataSource} columns={columns} />
                </Card>
        )
    }
}
