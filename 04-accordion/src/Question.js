import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { question } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="question" key={question.id}>
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isExpanded && <p>{question.info} </p>}
    </article>
  );
};

export default Question;
