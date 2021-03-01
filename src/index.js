import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
//读取local中保存的user,保存到内存中
memoryUtils.user=storageUtils.getUser()
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
