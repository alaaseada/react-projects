import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function getLocalStorage() {
  let items = localStorage.getItem("items");
  if (items) {
    return (items = JSON.parse(items));
  } else {
    return [];
  }
}

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) {
      showAlert(true, "error", "Please enter a value.");
    } else {
      setItems([...items, newItem]);
      setNewItem("");
      showAlert(
        true,
        "msg",
        `${
          isEditMode
            ? "The item has been changed"
            : "Item has been successfully added."
        }`
      );
    }
    setIsEditMode(false);
  }

  function editItem(index) {
    const old_value = items[index];
    setIsEditMode(true);
    setNewItem(old_value);
    const filtered_items = items.filter((item) => item !== old_value);
    setItems(filtered_items);
  }

  function deleteItem(index) {
    const filtered_items = items.filter((item, Index) => Index !== index);
    setItems(filtered_items);
    showAlert(true, "msg", "The item has been successfully deleted.");
  }

  function removeAll() {
    setItems([]);
    showAlert(true, "msg", "Items' list has been successfully cleared.");
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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
            {isEditMode ? "Save" : "Submit"}
          </button>
        </div>
      </form>
      {items.length > 0 && (
        <>
          <List items={items} editItem={editItem} deleteItem={deleteItem} />
          <button type="button" className="clear-btn" onClick={removeAll}>
            Clear items
          </button>
        </>
      )}
    </section>
  );
}

export default App;
