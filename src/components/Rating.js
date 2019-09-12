import React, { useState } from 'react';

export default function Rating() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}> Add </button>
    </div>
  )
};
