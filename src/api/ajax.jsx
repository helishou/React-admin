// 能发送异步ajax请求的函数模块
// 封装axios
import axios from 'axios'

export default function ajax(url,data={},type="GET") {
    if(type==='GET'){
        //发get请求
        return axios.get()
    }else{//发post请求
        return axios.post()
    }
}