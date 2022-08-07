import React, { useState, useEffect } from 'react'

const Tour = (props) => {
  const subInfo = props.tour.info.substring(0, 200) + '...'
  const [isInteresting, setIsInteresting] = useState(true)
  const [readMore, setReadMore] = useState(true)
  const [tour, setTour] = useState({
    ...props.tour,
    info: subInfo,
    displayed: true,
  })

  function handleRead(e) {
    if (readMore) {
      setTour({ ...tour, info: props.tour.info })
    } else {
      setTour({ ...tour, info: subInfo })
    }
    setReadMore(!readMore)
  }

  function handleTourDisplay() {
    setIsInteresting(false)
  }

  useEffect(() => {
    if (!isInteresting) {
      setTour({ ...tour, displayed: false })
    }
  }, [isInteresting])

  return (
    <>
      {tour.displayed && (
        <article key={tour.id} className="single-tour">
          <img src={tour.image} alt={tour.name}></img>
          <footer>
            <div className="tour-info">
              <h4>{tour.name}</h4>
              <h4 className="tour-price">${tour.price}</h4>
            </div>
            <p>
              {tour.info}
              <button type="button" onClick={handleRead}>
                {readMore ? 'Read More' : 'Read Less'}
              </button>
              <button className="delete-btn" onClick={handleTourDisplay}>
                Not Interested
              </button>
            </p>
          </footer>
        </article>
      )}
    </>
  )
}

export default Tour
