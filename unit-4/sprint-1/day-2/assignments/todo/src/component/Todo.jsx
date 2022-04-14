import React, { useState } from 'react'
import TodoItem from './Todoitem'

export const Todo = () => {

    const [input, setInput]= useState("");
    const [todo,setTodo]= useState([]);

    const handleChange =(e) =>{
        setInput(e.target.value)
    }

    const addTodo = () =>{
        const obj={
            title:input
        }
        setTodo([...todo,obj])
    }
  return (
    <>
    <input type="text" placeholder="Write Something" value={input} onChange={handleChange}/>
    <button onClick={addTodo}>ADD</button>
    <div>
        {
            todo.map((item)=>{
                return <TodoItem {...item}/>
    })}
    </div>
    </>
  )
}
