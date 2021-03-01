import React, { Component } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import {Redirect} from 'react-router-dom'
export default class Admin extends Component {

    render() {
        const user = memoryUtils.user
        // 如果内存中没有存储user ==>当前没登陆
        if(!user||!user._id){
            //自动跳转到登陆
            return <Redirect to='/login'/>
        }
        return (
            <div>
                Hello,{user.username}
            </div>
        )
    }
}
