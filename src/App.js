import { message } from 'antd';
// import 'antd/dist/antd.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
export default class App extends Component {
  info = () => {
    message.info('This is a normal message');
  };
  render() {
    return (
      <Router>
        <Route path='/' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
      </Router>
    )
  }
}
