import React, { Component } from 'react'
import './index.css'
export default class Demo extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <A render={(name)=><B name={name}/>}/>
            </div>
        )
    }
}

class A extends Component {
    state = {name:'tom'}
    render() {
        return (
            <div className='child'>
                <h3>我是a组件</h3>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='grand'>
                <h3>我是b组件</h3>
                {this.props.name}
            </div>
        )
    }
}
