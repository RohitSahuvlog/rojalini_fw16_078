import {ADD_TODO,INCREASE_COUNTER,DECREASE_COUNTER, TOGGLE_TODO, REMOVE_TODO} from './actionType'

const init = {
    counter:0,
    todos:[]
}

export const reducer =(state= init,{type,payload})=>{
    switch(type){
        case INCREASE_COUNTER:
        return {
            ...state,counter:state.counter+payload
        }

        case DECREASE_COUNTER:
        return {
            ...state,counter:state.counter-payload
        }

        case TOGGLE_TODO:
        return{
            ...state,todos:state.todos.map((el)=>el.id===payload?{...el,status:!el.status}:el)
        }

        case ADD_TODO:
        return{
            ...state,todos:[...payload]
        }

        case REMOVE_TODO:
        return{
            ...state,todos:state.todos.filter((el)=>el.id!==payload)
            // (console.log(payload))
        }

        default:
        return state
    }
}