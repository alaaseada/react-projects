import React from 'react'
import Tour from './Tour'
const Tours = (props) => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our tours</h2>
        </div>
        <div className="underline"></div>
        {props.tours.length ? (
          props.tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} />
          })
        ) : (
          <h2>No tours are available for now.</h2>
        )}
      </section>
    </main>
  )
}

export default Tours
