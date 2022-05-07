import './App.css';
import { useEffect } from 'react';
import Navbar from "./Components/Navbar";
import Iphone from "./Components/Pages/Iphone";
import Mac from "./Components/Pages/Mac";
import Accessories from "./Components/Pages/Accessories";
import Store from "./Components/Pages/Store";
import AddToCart from "./Components/Pages/AddToCart";
import {Routes, Route, useNavigate} from "react-router-dom"

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("./store");
  }, []);

  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/Mac" element={<Mac />} />
      <Route path="/Iphone" element={<Iphone />} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/AddTocart" element={<AddToCart />}/>
    </Routes>
    </div>
  );
}

export default App;
