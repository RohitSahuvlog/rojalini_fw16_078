import React, { useEffect, useState } from 'react'
import InputTimer from './InputTimer';

 const Timer = () => {
    const[min, setMin] = useState(5);
    const[second, setSecond] = useState(0);
    const[timer, setTimer] = useState(false);
    const[input, setInput] = useState(false);

  useEffect(() => {
    let x= null;
    if(timer){
      x = setInterval(() =>{
        if(second > 0){
          setSecond((elem) => elem-1);
        }
        if(second === 0) {
          if( min === 0){
            clearInterval(x)
          }
          else{
            setMin((e)=> e-1)
            setSecond(59)
          }
        }
        
      },1000);
    }
    else{
      clearInterval(x)
    }
    return () =>{
      clearInterval(x)
    }
  })

  return (
    <div>
      {
        input ? (<InputTimer setMin={setMin}/>):(
          <h1 onClick={() =>{
            setInput(true)
            setTimer(false)
            setSecond(0)
          }}>

          <span>{min}</span>m:
          <span>{second < 10 ? `0${second}` : second}</span>s
        
        </h1>
        )
      }

      <div>
        {timer ? (
          <button onClick={() =>{
            setTimer(false);
          } }>Stop</button>
        ): (<button onClick={() =>{
          setTimer(true);
          setInput(false);
        } }>Start</button>
        )}
        
        <button onClick={() =>{
            
            setMin(5)
            setSecond(0)
            setTimer(false);
          } }>Reset</button>
      </div>
    
    </div>
  )
}
export default Timer;

