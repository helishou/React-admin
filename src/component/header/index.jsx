import React, { Component } from "react";
// import { PageHeader } from "antd";
import "./index.less";
import {reqWeather} from '../../api/index'
import { CloudOutlined } from "@ant-design/icons";
import {formateDate} from '../../utils/dataUtils'
import memoryUtils from '../../utils/memoryUtils'
import { set } from "store";
export default class Header extends Component {
  state= {
    currentTime:formateDate(Date.now()),
    weather:'',
  }
  getTime=() =>{

    setInterval(()=>{
       this.setState({currentTime:formateDate(Date.now())}) 
    },1000)
  }
  getWeather=async ()=>{
    // console.log(reqWeather('杭州'))
    const {weather}=await reqWeather('杭州')
    // console.log(weather)
    this.setState({weather})
  }
  /* 第一次render后立即执行 */
  componentDidMount(){
    this.getTime()
    this.getWeather()
  }
  render() {
    const {currentTime,weather} = this.state
    const user =  memoryUtils.user.username
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，{user} </span>
          <a href="javascript:">退出</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            <span>首页</span>
          </div>
          <div className="header-bottom-right">
          <span>{currentTime} </span>
              <CloudOutlined  style={{width:'30px',height:'20px', margin: "15 15 15 15" }}/>
            <span>{weather} </span>
          </div>
        </div>
      </div>
    );
  }
}
