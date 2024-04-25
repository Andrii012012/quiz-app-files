import React from "react";
import "./formChooseQuizStyle.css";
import { useNavigate } from "react-router-dom";
import { PASSING_QUIZ_ROUTE } from "../../../../routes/routes";

export default function FormChooseQuiz(props) {
  let { hungleBegin, refSelect, quizes } = props;

  const startPage = useNavigate();

  function onBeginQuiz(e) {
    e.preventDefault();
    const array = [];
    const selected = refSelect.current.value;
    if (refSelect.current) {
      for (let key in quizes[selected]) {
        if (!array.includes(quizes[selected])) {
          array.push(quizes[selected][key]);
        }
      }

      const lengthCategory =
        typeof quizes[selected] === "object" &&
        quizes[refSelect.current.value].length;

      const numberRandom = Math.round(Math.random() * lengthCategory);

      if (quizes[selected][numberRandom]) {
        hungleBegin(quizes[selected][numberRandom]);
        startPage(PASSING_QUIZ_ROUTE);
      }
    }
  }

  return (
    <form action="" onSubmit={onBeginQuiz}>
      <section className="go-quiz-category-field">
        <label
          className="go-quiz-category-field__title title-quiz"
          htmlFor="go-quiz-choose-category"
        >
          Выберите нужную категорию:
        </label>
        <select ref={refSelect} id="go-quiz-choose-category"></select>
        <button
          className="go-quiz-category-field__choice-category__btn button-active button-color-two"
          aria-label="Начать викторину"
        >
          Начать викторину
        </button>
      </section>
    </form>
  );
}
