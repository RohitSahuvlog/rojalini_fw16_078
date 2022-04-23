
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

import { useEffect, useState } from "react";

function App() {

  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{
        
      }}>
         
      </button>
      {/* {show ? <Rentals table={table}/>: <AddHouse />} */}
  
      <br />
      <Rentals/>
    </div>
  );
}

export default App;
