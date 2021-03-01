{/* 包含应用中所有接口请求函数的模块
要求:能根据接口文档定义接口请求*/}
import ajax from './ajax.jsx'
//登陆
export default function reqLogin(username,password) {
    ajax('/login',{username,password},'POST')
}
export default function reqAddUser(user) {
    ajax('/manage/user/add',user,'POST')
}
