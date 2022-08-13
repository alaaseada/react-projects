import React, { useState } from 'react'
import SingleColor from './SingleColor'
import { getColorShades } from './utils'

function App() {
  const [colorVal, setColorVal] = useState('')
  const [colors, setColors] = useState([])
  const [isError, setIsError] = useState(false)
  const re = /#([0-9]|[a-f]){6}/

  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (!re.test(colorVal)) {
        setIsError(true)
        throw new Error('Invalid value')
      } else {
        setColors(getColorShades(colorVal))
        setIsError(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={colorVal}
            onChange={(e) => setColorVal(e.target.value)}
            className={isError ? 'error' : null}
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((color, Index) => {
          return <SingleColor key={Index} colors={color} index={Index} />
        })}
      </section>
    </>
  )
}

export default App
