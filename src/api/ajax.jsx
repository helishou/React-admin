// 能发送异步ajax请求的函数模块
// 封装axios
import axios from 'axios'

export default function ajax(url,data={},type="GET") {
    if(type==='GET'){
        //发get请求
        return axios.get(url,{//配置对象
            params:data // 指定请求参数
        })
    }else{//发post请求
        return axios.post(url,{
            data
        })
    }
}

// ajax('/login',{username:'tom',password:'12345'},'post').then()
// ajax('/manage/user/add',{username:'tom',password:'12345',phone:'12324525525252'},'post').then()