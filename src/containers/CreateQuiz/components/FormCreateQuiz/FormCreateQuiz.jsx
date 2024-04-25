import React from "react";
import "./formCreateQuizStyle.css";
import { useRef, useCallback } from "react";
import valudation from "../../../../utils/validations";
import ListFields from "../ListFields/ListFields";

let isClick = true;

export default function FormCreateQuiz(props) {
  let { setCounteElement, setQuiz, timeout, setIsCreate } = props;

  const inputCountQuestions = useRef();
  const inputCountAnswers = useRef();
  const inputCountCurrentAnswers = useRef();
  const inputCategory = useRef();

  const LIST_FIELDS = [
    {
      text: "Количество вопросов",
      id: "questions",
      changeKey: "countQuestions",
      ref: inputCountQuestions,
      name: "questions",
    },
    {
      text: "Количетво ответов:",
      id: "answers",
      changeKey: "countAnswers",
      ref: inputCountAnswers,
      name: "answers",
    },
    {
      text: "Количетво правильных ответов:",
      id: "currentAnswers",
      changeKey: "countCurrentAnswers",
      ref: inputCountCurrentAnswers,
      name: "currentAnswers",
    },
    {
      text: "Категория:",
      id: "category",
      changeKey: null,
      ref: inputCategory,
      name: "category",
    },
  ];

  function hungleSetCategory(name) {
    setQuiz((prevState) => {
      {
        const newObject = { ...prevState };
        newObject.categoryQuiz = name;
        return newObject;
      }
    });
  }

  const hundleSubmit = useCallback((e) => {
    e.preventDefault();
    let result;
    if (isClick) {
      result = valudation(
        [
          inputCountQuestions.current,
          inputCountAnswers.current,
          inputCountCurrentAnswers.current,
          inputCategory.current,
        ],
        timeout
      );
      isClick = false;
      setTimeout(() => {
        isClick = true;
      }, timeout + 1000);
    }
    hungleSetCategory(inputCategory.current.value);
    setIsCreate(result);
  });

  return (
    <form action="#" onSubmit={hundleSubmit}>
      <div className="collect-info create-quiz__count-questions">
        <fieldset>
          <legend className="collect-info__title subtitle-quiz">
            Сколько вы хотите создать вопросов в викторине?
          </legend>
          <div className="collect-info__container">
            <ListFields
              list={LIST_FIELDS}
              setValue={setCounteElement}
              hungleSetCategory={hungleSetCategory}
            />
          </div>

          <button
            className="collect-info__btn button-active button-color-two"
            aria-label="Создать таблицу заполнения"
          >
            Создать таблицу заполнения
          </button>
        </fieldset>
      </div>
    </form>
  );
}
