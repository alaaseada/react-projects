import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [msgType, setMsgType] = useState('')
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })

  function showAlert(show = false, type = '', msg = '') {
    setAlert({ show, type, msg })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!newItem) {
      showAlert(true, 'error', 'Please enter a value.')
    } else {
      setItems([...items, newItem])
      setNewItem('')
      showAlert(true, 'msg', 'Item has been successfully added.')
    }
  }

  function editItem(index) {}

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} items={items} />
        )}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="ex: eggs"
            className="grocery"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {items.length > 0 && <List items={items} editItem={editItem} />}
    </section>
  )
}

export default App
