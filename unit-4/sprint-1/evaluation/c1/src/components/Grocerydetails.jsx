import React from "react"
import data from '../data.json'
import GroceryItem from './GroceryItem'
import CartButton from './CartButton'

const GroceryDetails = ()=>{
console.log(data)

    return(
        <div>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map((item)=>(
               <div>
                    <GroceryItem item={item}/>
                    <CartButton/>
               </div>
            ))}
        </div>
        </div>
    )
}
export default GroceryDetails;