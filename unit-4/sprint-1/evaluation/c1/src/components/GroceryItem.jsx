// reusable card component

import React from 'react'

const GroceryItem = ({item}) => {
  const {discount, imgURL, mrp, sellingPrice, title} = item
  return (
    <div className='grocery'>
    <div className='upper'>
      <p>{discount}</p>
      <img src={imgURL} />
    </div>
    <p>{title}</p>
    <div className='price-div'>
      <p>{mrp}</p>
      <p>{sellingPrice}</p>
    </div>
  </div>
  )
  
};
export default GroceryItem;
 