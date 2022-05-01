import {ADD_TODO,INCREASE_COUNTER,DECREASE_COUNTER,TOGGLE_TODO, REMOVE_TODO} from './actionType'


export const addTodo =(payload)=>{
    return {
        type: ADD_TODO,
        payload:payload,
    }
}

export const increaseCounter=(payload)=>{
    return {
        type: INCREASE_COUNTER,
        payload:payload,
    }
}

export const decreaseCounter=(payload)=>{
    return {
        type: DECREASE_COUNTER,
        payload:payload,
    }
}

export const toggleTodo=(payload)=>{
    return {
        type:TOGGLE_TODO,
        payload:payload,
    }
}
export const removeTodo=(payload)=>{
    return {
        type:REMOVE_TODO,
        payload:payload,
    }
}