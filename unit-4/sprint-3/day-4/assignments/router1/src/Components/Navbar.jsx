import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

  return (
    <div style={{
        display: "flex",
        backgroundColor: "lightgreen",
        padding: "20px",
        marginBottom: "10px",
        justifyContent: "space-around"
    }}>
        <div>
            <Link to="/store">Store</Link>
        </div>
        <div>
            <Link to="/mac">Mac</Link>
        </div>
        <div>
            <Link to="/iphone">Iphone</Link>
        </div>
        <div>
            <Link to="/accessories">Accessories</Link>
        </div>
        <div>
            <button onClick={() =>{navigate("/addToCart")}}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Navbar