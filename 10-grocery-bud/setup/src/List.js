import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, editItem, deleteItem }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {items.map((item, index) => {
          return (
            <article className="grocery-item" key={index}>
              <p className="title">{item}</p>
              <div className="btn-container">
                <FaEdit className="edit-btn" onClick={() => editItem(index)} />
                <FaTrash
                  className="delete-btn"
                  onClick={() => deleteItem(index)}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default List;
