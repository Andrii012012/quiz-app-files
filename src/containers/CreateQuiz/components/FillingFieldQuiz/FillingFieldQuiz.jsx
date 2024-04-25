import React from "react";
import "./fillingFieldQuizStyle.css";
import "./fillingFieldQuizMedia.css";
import { CreateQuestion } from "../../../CreateQuestion/CreateQuestion";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useCallback } from "react";
import { ContextSaveInput } from "../../../../context/ContextSaveInputValue";
import findElement from "../../../../utils/findElement";
import Button from "../../../../components/ui/Buttons/Button/Button";
import { PASSING_QUIZ_ROUTE } from "../../../../routes/routes";
import valudation from "../../../../utils/validations";

let isClick = true;

export default function FillingFieldQuiz(props) {
  let { countElement, changeQuiz, timeout, setQuiz, isCreate } = props;

  const [_, setGlobalValue] = useContext(ContextSaveInput);

  const [saveQuiz, setSaveQuiz] = useState([]);

  const goPage = useNavigate();

  const startQuiz = useCallback((e) => {
    e.preventDefault();
    const saveInput = [];
    if (isClick) {
      saveInput.push(
        findElement(countElement.countQuestions, "question"),
        findElement(countElement.countAnswers, "answer"),
        findElement(countElement.countCurrentAnswers, "currentAnswer")
      );

      const allFieldQuiz = [];

      saveInput.forEach((item, _) => {
        for (let index = 0; index < item.length; index++) {
          allFieldQuiz.push(item[index]);
        }
      });

      let result = valudation(allFieldQuiz, timeout);

      changeQuiz(saveQuiz);

      if (result) {
        hungleBeginQuiz(true);
        goPage(PASSING_QUIZ_ROUTE);
      }
    }
    isClick = false;

    setTimeout(() => {
      isClick = true;
    }, timeout + 1000);
  });

  function hungleSaveQuiz(object) {
    setSaveQuiz(object);
  }

  function hungleClearField(e) {
    setGlobalValue([]);
  }

  function hungleBeginQuiz(value) {
    setQuiz((prevState) => {
      const newOptions = { ...prevState };
      newOptions.isPassQuiz = value;
      return newOptions;
    });
  }

  return (
    <form action="#" onSubmit={startQuiz}>
      <section className="filling__quiz create-quiz__create-quize-container">
        {isCreate && (
          <CreateQuestion
            countQuestion={countElement.countQuestions}
            countAnswers={countElement.countAnswers}
            hungleSave={hungleSaveQuiz}
            countCurrentAnswers={countElement.countCurrentAnswers}
          />
        )}
      </section>
      {isCreate && (
        <div className="filling-quiz__container-button create-quiz__start-btn ">
          <Button
            className="filling-quiz__start-quiz button-change button-color-two"
            ariaLabel="Запустить викторину"
            type="submit"
            text="Запустить викторину"
          />
          <Button
            className="filling-quiz__btn-resent-field button-change button-color-one"
            ariaLabel="Очистить все поля"
            type="reset"
            text="  Очистить все поля"
            hungleFunc={hungleClearField}
          />
        </div>
      )}
    </form>
  );
}
