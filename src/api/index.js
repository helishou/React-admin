// import json from jsonp
import {message} from 'antd'
import ajax from "./ajax.jsx";
import jsonp from "jsonp";
// 包含应用中所有接口请求函数的模块
// 要求:能根据接口文档定义接口请求
// 每个函数的返回值都是promise

//登陆

export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");

export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

/* jsonp请求的接口请求函数 */
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://restapi.amap.com/v3/weather/weatherInfo?key=98c97d10c1fda37bdc5402d15c1cdd71&city=${city}`;
    jsonp(url, {}, (err, data) => {
    //   console.log(err, data);
      if (!err && data.status === "1") {
        const { temperature, weather } = data.lives[0];
        resolve({ weather});
      }else{
          message.error('天气获取失败')
      }
    });
  });
};

// reqWeather("北京");
