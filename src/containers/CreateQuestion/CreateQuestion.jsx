import { useState, memo } from "react";
import "./createQuestionStyle.css";
import "./createQuestionMedia.css";
import { CreateListCurrentAnswer } from "../../components/CreateListCurrentAnswer/CreateListCurrentAnswer.jsx";
import { CreateListAnswer } from "../../components/CreateListAnswer/CreateListAnswer.jsx";

const CreateQuestionForQuiz = (props) => {
  const [quiz, setQuiz] = useState([]);
  let { countQuestion, countAnswers, hungleSave, countCurrentAnswers } = props;

  const saveElement = [];

  function hungleSaveInfo(index, object, name = null, nameKey = null) {
    setQuiz((prevState) => {
      const newArray = [...prevState];
      const array = [];

      if (name) {
        for (let key in object) {
          if (key == name) {
            array.push(object[key]);
          }
        }
      }


      name
        ? (newArray[index] = { ...prevState[index], ...{ [nameKey]: array } })
        : (newArray[index] = { ...prevState[index], ...object });
      hungleSave(newArray);
      return newArray;
    });
  }

  for (let i = 1; i <= countQuestion; i++) {
    saveElement.push(
      <div
        className="filling-quiz__parent-quiz create-quiz__block-create"
        key={i}
      >
        <fieldset className="filling-quiz__field-question filling-quiz__filling-quiz">
          <legend className="filling-quiz__title">Вопрос №{i}</legend>
          <label
            htmlFor={`question${i}`}
            className="filling-quiz__name-question description-input"
          >
            Название вопроса
          </label>
          <input
            onChange={(e) =>
              hungleSaveInfo(i - 1, { question: e.target.value })
            }
            className="filling-quiz__field-input-question  input-field"
            type="text"
            id={`question${i}`}
            name='fieldQuiz'
            placeholder="Вопрос"
          />
        </fieldset>
        <fieldset className="filling-quiz__filling-quiz">
          <legend className="filling-quiz__title">Ответы:</legend>
          <CreateListAnswer
            key={i}
            index={i}
            nameSaveObject={"input-answer"}
            countObject={countQuestion}
            countCreate={countAnswers}
            hungleSave={(answer) =>
              hungleSaveInfo(i - 1, answer, "input-answer", "answers")
            }
            idInput={"answer"}
          />
        </fieldset>
        <fieldset className="filling-quiz__filling-quiz">
          <legend className="filling-quiz__title">Правильные ответы:</legend>
          <CreateListCurrentAnswer
            key={i}
            index={i}
            nameSaveObject={"input-current-answer"}
            countObject={countQuestion}
            countCreate={countCurrentAnswers}
            hungleSave={(currentAnswers) =>
              hungleSaveInfo(
                i - 1,
                currentAnswers,
                "input-current-answer",
                'currentAnswers'
              )
            }
            idInput={"currentAnswer"}
          />
        </fieldset>
      </div>
    );
  }

  return saveElement;
};

const CreateQuestion = memo(CreateQuestionForQuiz);

export { CreateQuestion };
