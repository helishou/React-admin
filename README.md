# 尚硅谷React项目教程(react实战全栈谷粒后台)

B站教程地址:(前100集)https://www.bilibili.com/video/BV1i4411N7Qc?p=100&t=0
(后40集)https://www.bilibili.com/video/BV1tK4y1H76t?p=15

## 使用说明

Master分支不包含redux管理状态

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 学习总结

教程已经比较久远了。遇到问题也不少。首先明确一个问题
### 为什么学习使用React
在传统的页面开发模式中，需要多次的操作DOM来进行页面的更新，我们都知道对DOM的操作会造成极大的性能问题。而React的提出就是减少对DOM的操作来提升性能，也就是Virtual DOM。

### Antdv3升级成v4

根据教程写的，form这块做的一头雾水。只能到官网查API写了，用自己的想法实现了对应的功能。写出来还是怪怪的。暂时就这样吧。主题色没改，整体还是蓝色。偷懒了。

### 使用echarts绘图

### 新的箭头函数用法
为什么箭头函数返回值要用小括号包括起来？
因为 大括号 是 函数主体 的标志。而箭头函数若要返回 自定义对象 的话，就必须用 小括号 把该对象括起来先。

### 主组件的文件名都是index.jsx

跟教程的按组件命名还是有些差别

### 添加了postman的接口json

翻了翻评论区,都没人提供.就自己手打搞了一个

### 服务器地址用的评论区的

地址为：http://120.55.193.14:5000
天气接口换成了高德api，教程百度的挂了

### 其他总结
1.实现页面跳转前return，防止内存泄漏
2.initialvalue写在item上
3.因为后台数据保存不规范，要检查item是否存在再渲染


## Redux总结
redux确实学的有点头疼.关键得理解他到底每一步存在的意义是啥.不然连这部操作的必要性都不知道,自然就记不清有多少步了.
### 什么情况下需要使用 redux
1) 总体原则: 能不用就不用, 如果不用比较吃力才考虑使用
2) 某个组件的状态，需要共享
3) 某个状态需要在任何地方都可以拿到
4) 一个组件需要改变全局状态
5) 一个组件需要改变另一个组件的状态
### 分清react-redux和redux
1) 一开始完全懵逼,store.dispatch和connect this.props 混用,傻傻分不清,学了源码才知道connect Provider是react-redux的东西
2) 使用react-redux,你不必将 state 中的数据原封不动地传入组件，可以根据 state 中的数据，动态地输出组件需要的（最小）属性
3) react 16.0后与教程源码有所出入,于是学的最新的
### reducer为纯函数
简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数
