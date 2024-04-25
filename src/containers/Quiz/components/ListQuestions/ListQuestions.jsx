import React from "react";
import "./listQuestionsStyle.css";

export default function ListQuestions(props) {
  let { list, countCurrentVariants, render, currentAnswers, answers } = props;

  function checkQuestion(index, e) {
    const string = String(index);

    if (e.key === "Enter") {
      if (currentAnswers.includes(string)) {
        countCurrentVariants();
      }
      if (answers.includes(e.target.innerHTML)) {
        countCurrentVariants();
      }

      render();
    }
  }

  function checkClickQuestion(e, index) {
    const string = String(index);

    if (currentAnswers.includes(string)) {
      countCurrentVariants();
    }

    if (currentAnswers.includes(e.target.innerHTML)) {
      countCurrentVariants();
    }

    render();
  }

  return (
    <>
      {list.map((item, index) =>
        item !== undefined ? (
          <li
            className="quize__item item-quize"
            tabIndex={String(index)}
            onKeyDown={(e) => checkQuestion(index, e)}
            onClick={(e) => checkClickQuestion(e, index)}
            key={index}
          >
            {item}
          </li>
        ) : null
      )}
    </>
  );
}
