import React from "react";
import "./createPointQuizStyle.css";
import "./createPointQuizMedia.css";
import { memo } from "react";
import Button from "../ui/Buttons/Button/Button";

const CreatePointQuiz = memo((props) => {
  let {
    classNameInput = null,
    text,
    hungleDeleteElement,
    hungleSaveValue,
    globalValue,
    number,
    hungleAddElement,
    id = null,
  } = props;

  const typeValue = typeof globalValue === "object" && globalValue;
  let value = "";
  if (Array.isArray(typeValue))
    value = !globalValue[number] ? globalValue : globalValue[number];

  return (
    <div className="filling-quiz__container-field">
      <label htmlFor={`${id}${number}`} className="description-input">
        {text} - №{number + 1}
      </label>
      <div className="filling-quiz__container-btn">
        <input
          onChange={(e) => hungleSaveValue(number, e.target.value, e)}
          value={value}
          className={`filling-quiz__input-field input-field ${classNameInput}`}
          type="text"
          id={`${id}${number}`}
          name="fieldQuiz"
          placeholder="Ответ"
        />
        <Button
          className={"button-detele button-change button-color-one"}
          classNameParent="filling-quiz__button-body"
          number={number}
          hungleFunc={hungleDeleteElement}
          text="Удалить"
        />
        <Button
          className={"button-add button-change button-color-two"}
          number={number}
          hungleFunc={hungleAddElement}
          text="Добавить"
        />
      </div>
    </div>
  );
});

export default CreatePointQuiz;
