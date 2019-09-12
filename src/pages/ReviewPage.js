import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm.js'
import Header from '../components/Header.js'

export default function ReviewPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="reviewPage">
      <Header />
      <ReviewForm />
    </div>
  )
};
