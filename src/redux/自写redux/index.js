/* redux库的主模块
1.createStore(
    2.comnbineReducers
    3.applyMiddleware
    4.getState
    5.dispatch
    6.subscribe
) */

/* 根据指定reducer创建对象 */
export function createStore(reducer) {
    /* 返回内部的state数据 */
    function getState(){

    }

    /* 分发action，出发reducer调用，产生新state */
    function dispatch(action){

    }

    /*  
    绑定内部state改变的监听回调
    */
    function subscribe(listener){

    }

    return {
        getState,
        dispatch,
        subscribe
    }
}


/* 整合传入的包含多个reducer的对象 */
export function comnbineReducers(reducers){
    return (state,action)=>{

    }
}