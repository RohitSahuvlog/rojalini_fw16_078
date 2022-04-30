import React, { useContext } from 'react'
import styled from 'styled-components'
import {AuthContext} from '../context/AuthContext'

const Nav = styled.div`
    margin-top: 1%;

    button{
        background-color: purple;
        font-weightL:500;
        width:5%;
        height: 30px;
        justify-content: center;
        margin: auto;
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