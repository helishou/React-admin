import ajax from './ajax.jsx'
// 包含应用中所有接口请求函数的模块
// 要求:能根据接口文档定义接口请求
// 每个函数的返回值都是promise

//登陆

export  const reqLogin = (username,password)=> ajax('/login',{username,password},'POST')

export  const reqAddUser=(user)=>  ajax('/manage/user/add',user,'POST')