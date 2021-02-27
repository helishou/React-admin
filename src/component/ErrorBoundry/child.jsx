import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users:[
            {}
            // {id:'001',name:'tom',age:18},
            // {id:'001',name:'tom',age:18},
            // {id:'001',name:'tom',age:18}
        ]
    }
    render() {
        return (
            <div>
                <h2>我是child组件</h2>
                {
                    this.state.user.map((userObj)=>{
                        return <h4 id={userObj.id}>{userObj.name}-------{userObj.age}</h4>
                    })
                }
            </div>
        )
    }
}
