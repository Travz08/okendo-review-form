import React, { useState } from 'react';
import { ReactComponent as StarSolid } from '../assets/icons/star-solid.svg'
import { ReactComponent as StarRegular } from '../assets/icons/star-regular.svg'

export default function Rating() {
  const rateLimit = 5;
  const [rate, setRate] = useState({
    rating: null,
    temporaryRating: null,
    isSelecting: false
  });

  const starRate = (rating) => {
    setRate({
      rating: rating,
      temporaryRating: rating
    });
  }

  const starHover = (rating) => {
    rate.temporaryRating = rate.rating;
    rate.rating = rating;

    setRate({
      rating: rate.rating,
      temporaryRating: rate.temporaryRating,
      isSelecting: true
    });
  }

  const starLeave = () => {
    rate.rating = rate.temporaryRating;

    setRate({
      rating: rate.rating,
      isSelecting: false
   });
  }

  const stars = [...Array(rateLimit)].map((v, i) => {
    const isRated = rate.rating >= i && rate.rating != null ? 'isSelected' : 'notSelected';

    return (
      <label
        key={i}
        onClick={() => starRate(i)}
        onMouseOver={() => starHover(i)}
        onMouseOut={() => starLeave()}
      >
        {
          rate.isSelecting && rate.rating < (i)
          ? <StarRegular className={`rating__icon__selecting`}/>
          : <StarSolid className={`rating__icon rating__icon--${isRated}`} />
        }
      </label>
  )
  })

  return (
    <div className="rating">
      {stars}
    </div>
  )
};
