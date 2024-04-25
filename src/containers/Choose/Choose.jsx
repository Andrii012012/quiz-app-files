import React from "react";
import "./chooseStyle.css";
import "./chooseMedia.css";
import { NavLink } from "react-router-dom";
import { CREATE_QUIZ_ROUTE, PASS_QUIZ_ROUTE } from "../../routes/routes";

function Choose(props) {
  let {  } = props;

  return (
    <section className="question block-quiz">
      <div className="question__container">
        <h1 className="question__title title-quiz">
          Хотите пройти уже созданую викторину или создать свою?
        </h1>
        <div className="question__container-button">
          <NavLink
            className="question__agree question__btn"
            to={PASS_QUIZ_ROUTE}
            aria-label="Данная кнопка позволяет перейти к выбору уже существующих готовых викторин"
          >
            пройти
          </NavLink>
          <NavLink
            className="question__disagree question__btn"
            to={CREATE_QUIZ_ROUTE}
            aria-label="Данная кнопка позволяет перейти к созданию своей викторине"
          >
            создать
          </NavLink>
        </div>
      </div>
    </section>
  );
}

 export { Choose };