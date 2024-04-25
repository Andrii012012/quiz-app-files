import "./spendQuizStyle.css";
import "./spendQuizMedia.css";
import { useEffect, useRef } from "react";
import MassageError from "../../components/MassageError/MassageError.jsx";
import ButtonBeBack from "../../components/ui/Buttons/ButtonBeback/buttonBeBack.jsx";
import FormChooseQuiz from "./components/FormChooseQuiz/FormChooseQuiz.jsx";

function SpendQuizes(props) {
  let { hungleBegin, close } = props;
  const quizes = JSON.parse(localStorage.getItem("quizes"));
  const refSelect = useRef(null);

  useEffect(() => {
    for (let key in quizes) {
      if (key !== 'null') {
        const newOption = new Option(key, key, true, true);

        if (refSelect.current !== undefined) {
          refSelect.current.prepend(newOption);
        }
      }
    }
    return () => (refSelect.current = null);
  }, []);

  const element = quizes ? (
    <section className="go-quiz block-quiz">
      <ButtonBeBack
        className={"btn-call-back go-quiz__btn-call-back"}
        close={close}
      />
      <div className="go-quiz__container">
        <FormChooseQuiz
          hungleBegin={hungleBegin}
          refSelect={refSelect}
          quizes={quizes}
        />
      </div>
    </section>
  ) : (
    <MassageError text="Вы ещё не создали ни одной викторины! Создайте викторину, чтобы в будущем ее пройти!" />
  );
  return element;
}

export { SpendQuizes };
