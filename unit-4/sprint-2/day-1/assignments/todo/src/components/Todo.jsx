import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function Todo() {

const [state, setState] = useState("")
const [todos, setTodos] = useState([])
const [page, setPage] = useState(1)


const getData = () => {
    axios.get(`http://localhost:3001/todos?_limit=3&_page=${page}`).then((res) => {
        setTodos(res.data)
    })
}

useEffect(()=> {
    getData()
},[page]);

    return (
        <div>
            <input type="text" onChange={(e)=>setState(e.target.value)} />
            <button onClick={() => {
                fetch("http://localhost:3001/todos",{
                    method: "POST",
                    body: JSON.stringify({title: state, done:false}),
                    headers:{
                        "content-type": "application/json",
                    },
                }).then(()=>{
                    getData()
                })
            }}>
                Save Todo</button>
            {todos.map((g) => <div key={g.id}>{g.title}</div>)}
            <button onClick = {() => {setPage(page-1)}}>Prev</button>
            <button onClick = {() => {setPage(page+1)}}>Next</button>
        </div>
    );
}

export default Todo;