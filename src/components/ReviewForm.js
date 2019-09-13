import React from 'react';
import Toggle from './Toggle.js'
import Rating from './Rating.js'

export default function ReviewForm() {
  return (
    <form className="reviewForm">
      <main>
        <div className="container">
          <div className="reviewForm__container">
            <section className="reviewForm__container__card">
              <div className="reviewForm__container__card__item">
                <div className="reviewForm__container__card__item__label" >
                  <span>Your Rating</span>
                </div>
                <Rating />
              </div>
              <div className="reviewForm__container__card__item">
                <div className="reviewForm__container__card__item__label" >
                  <span>Review Title</span>
                </div>
                <input className="reviewForm__input__title" type="text" name="title" placeholder="Summary of your experience"/>
              </div>
              <div className="reviewForm__container__card__item">
                <div className="reviewForm__container__card__item__label" >
                  <span>Your Review</span>
                </div>
                <textarea className="reviewForm__input__review" rows="6" name="review" placeholder="Give us some detail about what you liked and disliked about the product"/>
              </div>
              <div className="reviewForm__container__card__item">
                <div className="reviewForm__container__card__item__label" >
                  <span>Would you recommend this product?</span>
                </div>
                <Toggle />
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="reviewForm__footer">
        <div className="reviewForm__footer__terms">
          <span>
            By continuing you agree to our <a href="https://www.okendo.io/end-user-terms/" target="_blank" rel="noopener noreferrer" >Terms and Conditions</a>, and <a href="https://www.okendo.io/privacy-policy/" target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
          </span>
        </div>
        <button className="reviewForm__footer__button">agree & continue</button>
      </footer>
    </form>
  )
};
