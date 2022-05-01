import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display: 'flex',height:"100px",background:"grey",color:"white"}}>
        <Link to={"/"}>Home</Link>
    </div>
  )
}
