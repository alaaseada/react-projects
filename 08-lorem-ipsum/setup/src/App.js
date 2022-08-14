import React, { useState } from "react";
import data from "./data";
function App() {
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState([]);

  function handleSubmission(e) {
    e.preventDefault();
    let amount_val = 0;
    amount_val = amount < 0 ? 1 : amount > 8 ? 8 : amount;
    setContent(data.slice(0, amount_val));
  }

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmission}>
        <label htmlFor="amount">Pharagraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {content.map((line) => {
          return <p>{line}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
