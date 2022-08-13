import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);

  const filterItems = (category) => {
    if (category !== "All") {
      const filtered_items = data.filter((item) => item.category === category);
      setItems(filtered_items);
    } else {
      setItems(data);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={data} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
