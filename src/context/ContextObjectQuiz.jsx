import React from "react";
import { useState } from "react";
const QuizContext = React.createContext();

function ContextObjectQuiz({ children }) {
  const [quiz, setQuiz] = useState([]);
  return (
    <QuizContext.Provider value={quiz}>
      {children}
    </QuizContext.Provider>
  );
}

export { ContextObjectQuiz, QuizContext };
