/* redux最核心的管理对象store */

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
//向外默认暴露store

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))