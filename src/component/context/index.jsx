import React, { Component } from "react";
import "./index.css";

//创建context对象
const MyContext = React.createContext();
export default class A extends Component {
  state = { username: "tom" };
  render() {
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是:{this.state.username}</h4>
        <MyContext.Provider value={this.state.username}>
          <B />
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我的从A收到的用户名是:{this.props.username}</h4>
        <C  />
      </div>
    );
  }
}

class C extends Component {
    //声明
    // static contextType = MyContext
  render() {
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>我从A收到的用户名是:
            <MyContext.Consumer>
                {value=>{
                    return `${value}`
                }}</MyContext.Consumer></h4>
      </div>
    );
  }
}
