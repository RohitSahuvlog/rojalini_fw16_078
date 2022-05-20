import React from 'react'
import styles from "./Timer.module.css";

const InputTimer = () => {
    const {setSecond} 
  return (
    <div>
      <input
         type="number"
         placeholder="Enter Seconds"
         onChange={(item)=> setSecond(item.target.value)}
      
      />
    </div>
  )
}

export default InputTimer
