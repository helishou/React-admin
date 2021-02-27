import React, { Component } from 'react'
import Child from './child.jsx'
export default class Parent extends Component {
    state={hasError:''}//用于标识子组件有没有错误
    //当parent的子组件会触发调用,会携带错误信息,不适合开发环境
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }
    componentDidCatch(){
        console.log('渲染组件时出错')      
        //此处用于统计错误,反馈给服务器  

    }
    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError?<h2>当前网络不稳定,稍后再试</h2>:<Child/>}
            </div>
        )
    }
}
