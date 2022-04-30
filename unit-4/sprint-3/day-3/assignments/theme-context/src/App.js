
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './contextProvider/ThemeProvider'
import { Border,ButtonColor } from './components/Border.styled'
import LoginForm from './components/LoginForm.jsx'

function App() {

  const [theme,toggleTheme] = useContext(ThemeContext)

  return (

    <>

      <Border  bg={theme}>
              
              <div style={{display:"flex",gap:"20px"}} >
                  <a>HOME</a>
                  <a>LOGIN</a>
                  <a>SIGNUP</a>
              </div>
              
              {theme} : <ButtonColor bg={theme} onClick={toggleTheme}>THEME</ButtonColor>
      </Border>

      <center>

      <Border bg={theme} >

              <div style={{margin:"auto",height:"300px",paddingTop:"100px"}}>
                 <LoginForm></LoginForm>
              </div>
              
      </Border>

      </center>
      
    

      <Border  bg={theme}>
              
              <div style={{display:"flex",gap:"20px"}} >
               
                 <a>ABOUT</a>
                 <a>CONTACT US</a>
                 <a>OUR PARTNERS</a>
               
              </div>
            
      </Border>
     
    
    </>
    
      
    
    
   
     
      )
}

export default App;

