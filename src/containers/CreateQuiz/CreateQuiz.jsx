import { useState } from "react";
import "./createQuizStyle.css";
import "./createQuizMedia.css";
import ButtonBeBack from "../../components/ui/Buttons/ButtonBeback/buttonBeBack.jsx";
import FormCreateQuiz from "./components/FormCreateQuiz/FormCreateQuiz.jsx";
import FillingFieldQuiz from "./components/FillingFieldQuiz/FillingFieldQuiz.jsx";

function CreateQuiz(props) {
  let timeout = 4500;

  let { changeQuiz, setQuiz } = props;
  const [countElement, setCounteElement] = useState({
    countQuestions: 0,
    countAnswers: 0,
    countCurrentAnswers: 0,
  });

  const [isCreate, setIsCreate] = useState(false);

  return (
    <section className="create-quiz block-quiz">
      <ButtonBeBack className={"btn-call-back create-quiz__btn-call-back"} />
      <div className="create-quiz__container">
        <h1 className="create-quiz__title title-quiz">
          Создайте собственную викторину!
        </h1>
        <FormCreateQuiz
          setCounteElement={setCounteElement}
          setQuiz={setQuiz}
          timeout={timeout}
          setIsCreate={setIsCreate}
        />
        <FillingFieldQuiz
          countElement={countElement}
          changeQuiz={changeQuiz}
          timeout={timeout}
          setQuiz={setQuiz}
          isCreate={isCreate}
        />
      </div>
    </section>
  );
}

export { CreateQuiz };
