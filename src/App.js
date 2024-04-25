import "./styles/index.css";
import "./styles/media.css";
import { useEffect, useState, useLayoutEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import saveQuizes from "./services/localStorage/saveQuizes.js";
import { QuizContext } from "./context/ContextObjectQuiz.jsx";
import { Choose } from "./containers/Choose/Choose.jsx";
import { SpendQuizes } from "./containers/SpendQuiz/SpendQuiz.jsx";
import { CreateQuiz } from "./containers/CreateQuiz/CreateQuiz.jsx";
import { Quiz } from "./containers/Quiz/Quiz.jsx";
import { ResultQuiz } from "./components/ResultQuiz/ResultQuiz.jsx";
import { Header } from "./components/Header/Header.jsx";
import { setTheme } from "./components/ChangeTheme/ChangeTheme.jsx";
import {
  CREATE_QUIZ_ROUTE,
  PASSING_QUIZ_ROUTE,
  PASS_QUIZ_ROUTE,
  RESULT_QUIZE_ROUTE,
} from "./routes/routes.jsx";

function App() {
  const [globalSaveQuizes, setGlobalSaveQuizes] = useState([]);

  const [quiz, setQuiz] = useState({
    quiz: useContext(QuizContext),
    step: 0,
    countCurrent: 1,
    categoryQuiz: null,
    showResults: false,
    isPassQuiz: false,
  });

  const question = quiz.quiz[quiz.step];

  useLayoutEffect(() => {
    setTheme();
  });

  function changeQuiz(newObjectQuiz) {
    setQuiz((prevState) => {
      const newObject = { ...prevState };
      newObject.quiz = newObjectQuiz;
      newObject.isPassQuiz = true;
      return newObject;
    });
  }

  useEffect(() => {
    if (quiz.quiz.length > 0) {
      setGlobalSaveQuizes(() => {
        return saveQuizes("quizes", quiz.quiz, quiz.categoryQuiz);
      });
      setQuiz((prevState) => {
        const newOptions = { ...prevState };
        newOptions.countCurrent = 1;
        return newOptions;
      });
    }
  }, [quiz.quiz]);

  return (
    <div className="App">
      <div className="error"></div>
      <Header />
      <div className="App__container">
        <Routes>
          <Route path="/" exast element={<Choose />} />
          <Route
            path={CREATE_QUIZ_ROUTE}
            element={<CreateQuiz changeQuiz={changeQuiz} setQuiz={setQuiz} />}
          />
          <Route
            path={PASS_QUIZ_ROUTE}
            element={<SpendQuizes hungleBegin={changeQuiz} />}
          />
          <Route
            path={PASSING_QUIZ_ROUTE}
            element={
              <Quiz
                question={question}
                quiz={quiz}
                setQuiz={setQuiz}
                step={quiz.step}
              />
            }
          />
          <Route
            path={RESULT_QUIZE_ROUTE}
            element={
              <ResultQuiz
                currentAnswers={quiz.countCurrent}
                forAnswers={quiz.step + 1}
                showResults={quiz.showResults}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
