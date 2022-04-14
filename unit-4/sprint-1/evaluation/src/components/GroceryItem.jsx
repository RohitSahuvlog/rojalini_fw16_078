// reusable card component
// import Data from '../data.json';
const GroceryItem = (props) => {
  
  return ( 
  <div id="main">
  <p id="discount">{props.discount}</p>
  <img src={props.imgURL}></img>
  <h3>{props.title}</h3>
  <div id="price">
    <h3>{props.sellingPrice}</h3>
    <p>{props.mrp}</p>
  </div>
  </div>
  )
};
export default GroceryItem;