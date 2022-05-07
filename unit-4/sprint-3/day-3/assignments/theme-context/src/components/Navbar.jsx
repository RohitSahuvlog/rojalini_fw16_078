import React,{useContext} from 'react'
import { NavbarDiv } from './All.styled';
import {ThemeContext} from '../contexts/ThemeContext';


function Navbar() {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
      <NavbarDiv color={theme}>
      <h2>Welcome!</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </NavbarDiv>
  )
}

export default Navbar
