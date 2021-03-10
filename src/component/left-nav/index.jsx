import React, { Component } from "react";
import "./index.less";
import { Menu } from "antd";
import { Link,withRouter } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import menuList from "../../config/menuConfig";
/* 
左侧导航的组件
 */
const { SubMenu } = Menu;
 class LeftNav extends Component {
  // state = {
  //   current: "1",
  // };
  getMenuNodes_map=(menuList) =>{
    // map加递归
    return menuList.map(item=>{
      /* 
      title
      key
      icon
      chilren 可能有 */
      if(!item.children){
        return (
        <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>)
      }else{
        return(
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  //改用reduce调用
  getMenuNodes= menuList=>{
    const path = this.props.location.pathname
    return menuList.reduce((pre,item)=>{
      //像pre中添加《item》或者《submenu》
      if(!item.children){
        pre.push(
        <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>)
      }else{
        const cItem=item.children.find(cItem => 0===path.indexOf(cItem.key))
        //如果存在，说明当前item的子列表需要打开
        if(cItem){
          this.openkey = item.key
        }

        pre.push(
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {this.getMenuNodes(item.children)}
        </SubMenu>
        )
      }
      return pre//记住return pre
    },[])
  }
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };
  //在第一次render之前执行一次，为第一次render准备数据（必须同步）
  UNSAFE_componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
    
  }
  render() {

    // console.log(this)
    let path = this.props.location.pathname
    console.log(path)
    if(path.indexOf('/product')===0){//当前请求的是商品或其子路由界面
      path='/product'
    }
    const openkey = this.openkey
    // this.setState({current:path})
    return (
        <div>
          <Link to="/" className="left-nav-header">
            <img src={logo} alt="logo" />
            <h1>硅谷后台</h1>
          </Link>
        

        {/* <br />
        <br /> */}
        <Menu
          theme="dark"
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={[openkey]}
          selectedKeys={[path]}
          mode="inline"
        >
          {this.menuNodes}
        </Menu>
        </div>
    );
  }
}
export default withRouter(LeftNav)