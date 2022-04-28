import React, { useContext } from 'react'
import styled from 'styled-components'
import {AuthContext} from '../context/AuthContext'

const Nav = styled.div`
    display:flex;
    width:100%;
    height:100px;
    background-color:black;
    color:white;

     button{
        background-color:yellow;
        font-weightL:500;
        width:150px;
        height:40px;
    }
`

function Navbar() {
const {isAuth,toggleAuth} = useContext(AuthContext)
 console.log({isAuth,toggleAuth})

  return (
    <>
        <Nav>
            <button className="navBtn" onClick={toggleAuth}>
                {isAuth?"Logout":"Login"}
            </button>
        </Nav>
    </>
  )
}

export default Navbar