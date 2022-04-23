import logo from './forwad.svg';
import './App.css';
import { Paymentcard } from './paymentcd/Paymentcard';
import Arrow from '../src/paymentcd/forwad.svg'; 

function App() {
  return (
    <>
    
      <Paymentcard date="28/10/2020" 
      b="Case study"
      heading="Amazon Gift"
       d="Pay" 
       devices="Desktop - Mobile"
       logo="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
       img2={logo}
       />
    
    <Paymentcard date="17 sep 2020" 
    b="Case study"
    heading="Amazon Gift"
     d="Payment" 
     devices="MacOS - Mobile"
     logo="https://cdn.worldvectorlogo.com/logos/apple-13.svg"
     img2={logo}

     />
  
  </>
  );
}

export default App;
