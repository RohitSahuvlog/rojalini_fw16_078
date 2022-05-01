import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../redux/action'

function Counter() {

    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()

    const handleAdd=()=>{
        dispatch(increaseCounter(1))
    }

    const handleSub=()=>{
        dispatch(decreaseCounter(1))
    }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Decrease</button>
    </div>
  )
}

export default Counter