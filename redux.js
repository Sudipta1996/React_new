import axios from "axios"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const todoReducer=(state={
   todo: []
},action)=>{
    switch(action.type){
        case "TODO": return {todo: action.payload}
        default : return state
    }
}

export const store=createStore(todoReducer , composeWithDevTools(applyMiddleware(thunk)))

export const getTodos=(payload)=>{
    return{
        type: "TODO",
        payload
    }
}

export const showTodos=()=>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            dispatch(getTodos(res.data))
            console.log(res.data)
        })
        
    }
}
