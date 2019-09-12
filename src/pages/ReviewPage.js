import React, { useState } from 'react';
import Rating from './components/Rating.js'

export default function ReviewPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="reviewPage">
      <header className="header">
        <div>
          <span>1815 Rose Gold Chronograph Watch - Brown Croco Strap</span>
          <span>Review</span>
        </div>
      </header>
      <Rating />
    </div>
  )
};
