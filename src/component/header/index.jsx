import React, { Component } from "react";
// import { PageHeader } from "antd";
import "./index.less";
import { reqWeather } from "../../api/index";
import { CloudOutlined } from "@ant-design/icons";
import { formateDate } from "../../utils/dataUtils";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import menuList from "../../config/menuConfig";
// import { set } from "store";
import { withRouter } from "react-router-dom";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import LinkButton from '../link-button'
const { confirm } = Modal;
class Header extends Component {
  state = {
    currentTime: formateDate(Date.now()),
    weather: "",
  };
  getTime = () => {
    this.a=setInterval(() => {
      this.setState({ currentTime: formateDate(Date.now()) });
    }, 1000);
  };
  getWeather = async () => {
    // console.log(reqWeather('杭州'))
    const { weather } = await reqWeather("杭州");
    // console.log(weather)
    this.setState({ weather });
  };
  //退出登陆
  logout=()=>{
    //显示确认框
    const {history} = this.props
    // console.log(history)
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定退出登陆吗?',
      
      onOk() {
        console.log(this);
        // 删除数据
        // 跳转到login
        storageUtils.deleteUser()
        memoryUtils.user ={}
        history.replace('/login')
      },
      onCancel() {
        console.log('取消');
      },
    });
  }
  getTitle = () => {
    const path = this.props.location.pathname;
    let title;
    menuList.forEach((item) => {
      // console.log('key',item.key)
      // console.log('path',path)
      if (item.key === path) {
        // console.log(item);
        title = item.title;
      } else if (item.children) {

        const cItem = item.children.find((cItem) => cItem.key === path);
        if (cItem) {
          // 取出他的title
          // console.log(cItem);
          title = cItem.title;
        }
      }
    });
    // console.log(title)
    return title;
  };
  /* 第一次render后立即执行 */
  componentDidMount() {
    this.getTime();
    this.getWeather();
  }
  componentWillUnmount(){
    clearInterval(this.a)
  }
  render() {
    const { currentTime, weather } = this.state;
    const user = memoryUtils.user.username;
    //显示当前的title
    const title = this.getTitle();
    // console.log('title',title)
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，{user} </span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <span>{title}</span>
          </div>
          <div className="header-bottom-right">
            <span>{currentTime} </span>
            <CloudOutlined
              style={{ width: "30px", height: "20px", margin: "15 15 15 15" }}
            />
            <span>{weather} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
