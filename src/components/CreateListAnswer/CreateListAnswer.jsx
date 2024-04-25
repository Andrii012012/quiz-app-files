import { useEffect, memo } from "react";
import { WithChangeJsxObject } from "../Hocs/HookDleteteAdd.jsx";
import "./createListAnswerStyle.css";
import "./createListAnswerMedia.css";
import CreatePointQuiz from "../CreatePointQuiz/CreatePointQuiz.jsx";

const CreateAnswers = memo((props) => {
  let {
    hungleSaveValue,
    deleteElement,
    element,
    setElement,
    count,
    addElement,
    globalValue,
    nameSaveObject,
  } = props;

  const value = globalValue || [];

  useEffect(() => {
    const array = [];
    Array.from({ length: count }, (_, index) => {
      array.push(
        <CreatePointQuiz
          classNameInput={nameSaveObject}
          key={index}
          hungleSaveValue={hungleSaveValue}
          number={index}
          hungleDeleteElement={deleteElement}
          globalValue={value}
          hungleAddElement={addElement}
          text="Ответ под номером"
          id="answer"
        />
      );
    });

    setElement(array);
  }, [...value, count]);

  return element;
});

const CreateListAnswer = WithChangeJsxObject(CreateAnswers);

export { CreateListAnswer };
