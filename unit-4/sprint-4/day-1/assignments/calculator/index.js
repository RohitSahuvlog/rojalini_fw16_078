import Store from "./store.js";
import {reducer} from "./reducer.js";
const store = new Store(reducer, {
    count: 0
});


let counter = document.getElementById("counterValue");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");

counter.innerText = store.getState().count;

inc.addEventListener("click", ()=> {
    console.log("bgh")
    store.dispatch({type:"Increment"});
    counter.innerText = store.getState().count;
    
});

dec.addEventListener("click", () => {
    store.dispatch({type:"Decrement"});
    counter.innerText = store.getState().count;
});


let input = document.getElementById("input");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let div = document.getElementById("div");
let mul = document.getElementById("multi");

add.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Addition",
      payload: +value,
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  sub.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Substration",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  mul.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Multiplication",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  div.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Division",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });