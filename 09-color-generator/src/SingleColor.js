import React, { useState } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {
  const {
    colors: { red, green, blue },
    index,
  } = props
  const [isCopied, setIsCopied] = useState(false)
  const hex = rgbToHex(red, green, blue)

  function handleCopy(e) {
    navigator.clipboard.writeText(hex)
    setIsCopied(true)
  }
  return (
    <article
      className={`color ${index > 10 ? 'color-light' : 'false'}`}
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      onClick={handleCopy}
    >
      <p className="percent-value">{`(${red}, ${green}, ${blue})`}</p>
      <p className="color-value">{hex}</p>
      {isCopied ? <p className="">Color has been copied</p> : ''}
    </article>
  )
}

export default SingleColor
