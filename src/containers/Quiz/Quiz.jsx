import "./quizStyle.css";
import "./quizMedia.css";
import listFocusControlElement from "../../utils/listFocusControlElement";
import ListQuestions from "./components/ListQuestions/ListQuestions";
import { useNavigate } from "react-router-dom";
import { RESULT_QUIZE_ROUTE } from "../../routes/routes";
import MassageAboutNotValue from "../../components/MassageError/MassageError";

function Quiz(props) {
  let { question = {}, step, quiz, setQuiz } = props;
  const goPage = useNavigate();

  const lengthArray = quiz.length;
  const widthProgreeBar = Math.round((step / lengthArray) * 100);
  const fillPercentage = String(widthProgreeBar + "%");

  console.log(quiz);

  function render() {
    if (quiz.quiz.length - 1 !== quiz.step) {
      setQuiz((prevState) => {
        {
          const newObject = { ...prevState };
          newObject.step = quiz.step + 1;
          return newObject;
        }
      });
    } else {

      setQuiz((prevState) => {
        const newObject = { ...prevState };
        newObject.showResults = true;
        return newObject;
      });

      goPage(RESULT_QUIZE_ROUTE);
    }
  }

  function countCurrentVariants() {
    setQuiz((prevState) => {
      {
        const newObject = { ...prevState };
        newObject.countCurrent = quiz.countCurrent + 1;
        return newObject;
      }
    });
  }

  if (question.question) {
    return (
      <section className="quiz block-quiz">
        <div className="quiz__container">
          <div className="quiz__progress-container">
            <div
              className="quiz__progress"
              style={{ width: fillPercentage }}
            ></div>
          </div>
          <h1 className="quize__title title-quiz" tabIndex="0">
            {question.question}
          </h1>
          <ul
            onFocus={(e) => listFocusControlElement(e)}
            className="quize__items"
            tabIndex="0"
          >
            <ListQuestions
              list={question.answers[0]}
              render={render}
              countCurrentVariants={countCurrentVariants}
              currentAnswers={question.currentAnswers[0]}
              answers={question.answers[0]}
            />
          </ul>
        </div>
      </section>
    );
  } else {
     return <MassageAboutNotValue text='Страница недоступна!'/>
  }
}

export { Quiz };
