import React, { useState,useEffect } from "react";
import Button from "./components/Button";
import axios from "axios";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)

  useEffect(() => {
    FetchData({page})  
  }, [page])
  
  const FetchData =({page})=>{

    setLoading(true);
    axios({
      methid:'get',
      url:"https://json-server-mocker-masai.herokuapp.com/candidates",
      params:{
        _page:page,
      }
    })
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    .catch(error=>{
      setError( true)
     
    })
  }
console.log(data)
  return (
    <div className="App">
      <div>{
        loading &&  <div id="loading-container">...Loading</div>
      }{
        error && <div>Something went wrong!</div>
      }

  <Button id="SORT_BUTTON"  title={`Sort by Ascending Salary`}  />
  <Button title="PREV" id="PREV"  disabled={page===1} onClick={()=>setPage(page-1)} />

      <Button id="NEXT" title="NEXT"  onClick={()=>setPage(page+1)} />
      </div>
      {data.map((item) => {
      return(
        <CandidateCard key ={item.id} {...item}/>
      )   
      })}
    </div>
  );
}

 