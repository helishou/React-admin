import React, { Component } from "react";
import { Card, List, Message } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { reqCategory } from "../../api";

class Detail extends Component {
  state = {
    cName1: "",
    cName2: "",
  };
  async componentDidMount() {
    const { pCategoryId, categoryId } = this.props.location.state.desc;
    if (pCategoryId === "0") {
      // 一级分类
      const result = await reqCategory(categoryId);
      console.log(result);
      if (result.data.status === 0) {
        const cName1 = result.data.data.name;
        this.setState({ cName1 });
      } else {
        Message.error("请求分类失败");
      }
    } else {

/*
一个一个发      
 const result1 = await reqCategory(categoryId);
      const result2 = await reqCategory(pCategoryId); */
    //   一次发动多个请求
    const results = await Promise.all([reqCategory(categoryId),reqCategory(pCategoryId)])
      if ((results[0].data.status === 0) & (results[1].data.status === 0)) {
        const cName1 = results[0].data.data.name;
        const cName2 = results[1].data.data.name;
        this.setState({ cName1, cName2 });
      } else {
        Message.error("请求分类失败");
      }
    }
  }
  render() {
    //读取携带过来的state
    const { name, desc, price, detail, imgs } = this.props.location.state.desc;
    // console.log(name,desc,price,detail,imgs)
    // console.log(this.props)
    const title = (
      <span>
        <RollbackOutlined onClick={() => this.props.history.goBack()} />{" "}
        商品详情
      </span>
    );
    return (
      <Card title={title}>
        <List>
          <List.Item>
            <span className="left">商品名称:</span>
            <span style={{ marginLeft: 0 }}>{name}</span>
          </List.Item>
          <List.Item>
            <span className="left">商品描述:</span>
            <span>{desc}</span>
          </List.Item>
          <List.Item>
            <span className="left">商品价格:</span>
            <span>{price}</span>
          </List.Item>
          <List.Item>
            <span className="left">所属分类:</span>
            <span>
              {this.state.cName1}
              {this.state.cName2
                ? "-->" + this.state.cName2
                : this.state.cName1}
            </span>
          </List.Item>
          <List.Item>
            <span className="left">商品图片:</span>
            <span>
              {imgs.map((img) => (
                <img
                  key={img.name}
                  className="product-img"
                  alt={img.name}
                  src={img.url}
                ></img>
              ))}
            </span>
          </List.Item>
          <List.Item style={{ float: "left" }}>
            <span className="left">商品详情:</span>
            <span dangerouslySetInnerHTML={{ __html: detail }}></span>
          </List.Item>
        </List>
      </Card>
    );
  }
}
export default withRouter(Detail);
