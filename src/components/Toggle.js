import React, { useState } from 'react';

export default function Toggle() {
  const [isToggled, setIsToggled] = useState(null);
  const isYesActive = isToggled === 1 ? 'active' : 'inActive';
  const isNoActive = isToggled === 2 ? 'active' : 'inActive';
  return (
    <div className="toggle">
      <div onClick={() => setIsToggled(1)} className={`toggle__option toggle__option--${isYesActive}`}>
        <span>yes</span>
      </div>
      <div onClick={() => setIsToggled(2)} className={`toggle__option toggle__option--${isNoActive}`}>
        <span>no</span>
      </div>
    </div>
  )
};
