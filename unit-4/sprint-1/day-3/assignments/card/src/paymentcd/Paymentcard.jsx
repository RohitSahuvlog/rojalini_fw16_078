import React from 'react'

export const Paymentcard = (props) => {
  return (
    <>
    <div className="card">
        <div>
            <p>{props.date}</p>
            <button id="case">{props.b}</button>
            <h1>{props.heading}</h1>
            <h1>{props.d}</h1>
            <h2>{props.devices}</h2>
        </div>
        <div>
            <img className="img1" src={props.logo} alt="y" />
            <img className="img2" src={props.img2} alt="k" />
        </div>

    </div>
   
    
    
    
    
    </>
  )
}
