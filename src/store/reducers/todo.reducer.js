const initialState ={
    todos:['gym','cycling','running']
}

function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos]}
    }
    return{...state}
}

export default todoReducer