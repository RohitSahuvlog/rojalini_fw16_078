import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Timer';

function App() {
const [show, setShow] = useState()
const initial = 1
const end = 40
 
  return (
    <div className="App">
   

   {show ? <Stopwatch initial = {initial} end = {end}/> : ""}

   <button onClick={() => {setShow(!show)}}>{show ? "Hide" : "Show"}</button>

    </div>
  );
}
export default App;
