import React from "react";
import ReactDom from 'react-dom'
// export default class Demo extends Component {
//     state={count:0}
//     add=()=>{
//     //用户代码片段
//     this.setState(state=>({count:state.count+1}))
//     };
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }
export default function Demo() {
    console.log('demo');
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('tom')
    React.useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    function add(){
        setCount(count=>count+1)
    }
    function unmount(){
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    function changename(){
        setName('jack')
    }
  return (
    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <h2>当前名字为{name}</h2>
      <button onClick={changename}>点我改名</button>
    </div>
  );
}
