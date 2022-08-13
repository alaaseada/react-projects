import React, { useEffect } from 'react'

const Alert = ({ show, type, msg, removeAlert, items }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      removeAlert()
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <p
      className={`alert ${type === 'error' ? 'alert-danger' : 'alert-success'}`}
    >
      {msg}
    </p>
  )
}

export default Alert
