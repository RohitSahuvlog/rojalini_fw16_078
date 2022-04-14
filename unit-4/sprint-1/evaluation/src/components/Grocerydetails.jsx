import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
console.log(data)
    return(
        <>
        <h1 id="heading">Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {data.map((el) => {
                return (
                <GroceryItem discount = {el.discount} id = {el.id} imgURL = {el.imgURL} mrp = {el.mrp} sellingPrice = {el.sellingPrice} title = {el.title}/>
                )
            })}
        </div>
        </>
    )
}
export default GroceryDetails