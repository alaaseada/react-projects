import React, { useState } from "react";
import "./app.css";
import { data } from "./calendar";

function App() {
  const [birthdays, setBirthDays] = useState(data);
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getUTCDate();
  const currentYear = new Date().getFullYear();

  const today_birthdays = birthdays.filter((person) => {
    const birthDate = new Date(person.dateOfBirth);
    return (
      birthDate.getMonth() + 1 === currentMonth &&
      birthDate.getDate() === currentDay
    );
  });

  function calculateAge(dateOfBirth) {
    return currentYear - new Date(dateOfBirth).getFullYear();
  }

  function clearAll() {
    setBirthDays([]);
  }

  return (
    <>
      <div className="board">
        {}
        {today_birthdays.length === 0 ? (
          <h1>No birthdays today :(</h1>
        ) : (
          <h2> {today_birthdays.length} Birthday(s) today</h2>
        )}
        <section>
          {today_birthdays.map((person) => {
            return (
              <article key={person.id}>
                <div>
                  <img
                    className="avatar"
                    src={person.image}
                    alt={person.name}
                  ></img>
                </div>
                <div className="info">
                  <p className="name">{person.name}</p>
                  <p className="age">
                    {calculateAge(person.dateOfBirth)} Years
                  </p>
                </div>
              </article>
            );
          })}
        </section>
        {today_birthdays.length !== 0 ? (
          <button type="button" className="btn" onClick={clearAll}>
            Clear all
          </button>
        ) : (
          <br />
        )}
      </div>
    </>
  );
}

export default App;
