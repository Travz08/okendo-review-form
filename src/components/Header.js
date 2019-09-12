import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="header__container">
          <h1>1815 Rose Gold Chronograph Watch - Brown Croco Strap</h1>
          <h2>Review</h2>
        </div>
        <div className="header__navigation">
          <div className="header__navigation__container">
            <div className="header__navigation__container__step header__navigation__container__step--isActive">
              <span>Review</span>
            </div>
            <div className="header__navigation__container__step">
              <span>Ratings</span>
            </div>
            <div className="header__navigation__container__step">
              <span>Media</span>
            </div>
            <div className="header__navigation__container__step">
              <span>Confirm</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};
