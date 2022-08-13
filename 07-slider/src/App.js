import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [reviews, setReviews] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const upper_limit = reviews.length - 1;
  let review = reviews[currentIndex];

  // The only use is to correct the current index after each
  // render caused by the data or the current index
  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(upper_limit);
    }
    if (currentIndex > upper_limit) {
      setCurrentIndex(0);
    }
  }, [currentIndex, reviews]);

  // The hook is used to move the slider forward
  // and after each render (clear the interval)
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  });

  return (
    <section class="section">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="section-center">
        {reviews.map((review, Index) => {
          let position = "nextSlide";
          if (currentIndex === Index) {
            position = "activeSlide";
          }
          if (
            Index === currentIndex - 1 ||
            (currentIndex === 0 && Index === upper_limit)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={review.id} className={position}>
              <img
                src={review.image}
                alt={review.name}
                className="person-img"
              ></img>
              <h4>{review.name}</h4>
              <p className="title">{review.title}</p>
              <p className="text">{review.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          type="button"
          className="prev"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
