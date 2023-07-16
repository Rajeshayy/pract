const initialState={
    count: 100
}

const CounterReducer = function(state=initialState,action){
    console.log(state,action)
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }

    if(action.type==='RES'){
        return {...state,count:initialState.count}
    }
    return {...state};

}

export default CounterReducer