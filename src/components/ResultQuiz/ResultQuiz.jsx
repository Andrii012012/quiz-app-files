import "./resultQuizStyle.css";
import "./resultQuizMedia.css";
import ButtonBeBack from "../ui/Buttons/ButtonBeback/buttonBeBack";
import congratulation from "../../assets/images/Party Celebrate Sticker by Wave_video for iOS & Android _ GIPHY.gif";
import MassageError from "../MassageError/MassageError";

function ResultQuiz(props) {
  let { showResults, currentAnswers, forAnswers } = props;

  if (showResults) {
    return (
      <section className="result-quiz block-quiz">
        <div className="result-quiz__container">
          <h1 className="result-quiz__title title-quiz">
            Поздавляем вы прошли викторину!
          </h1>
          <div className="result-quiz__img">
            <img src={congratulation} />
          </div>
          <p className="result-quiz__result item-quize">
            Вы ответили на {currentAnswers - 1} из {forAnswers}
          </p>
          <ButtonBeBack
            className={"btn-call-back result-quiz__btn-callback"}
            updataPage={true}
          />
        </div>
      </section>
    );
  } else {
    return <MassageError text="Страница недоступна!" />;
  }
}

export { ResultQuiz };
