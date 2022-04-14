import React from 'react';
import { useState } from 'react';
export const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const oddEven = count % 2;
  return (
    <div>
      <h1 className={oddEven ? 'color-red' : 'color-green'}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};