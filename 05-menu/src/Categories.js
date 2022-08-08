import React from "react";

const Categories = ({ items, filterItems }) => {
  const unique_categories = new Set(items.map((record) => record.category));
  const categories = ["All", ...unique_categories];

  return (
    <div className="btn-container">
      {categories.map((cat, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
