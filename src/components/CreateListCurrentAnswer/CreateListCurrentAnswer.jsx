import { memo, useEffect } from "react";
import { WithChangeJsxObject } from "../Hocs/HookDleteteAdd.jsx";
import "./createListCurrentAnswerStyle.css";
import "./createListCurrentAnswerMedia.css";
import CreatePointQuiz from "../CreatePointQuiz/CreatePointQuiz.jsx";

const CreateCurrentAnswrs = memo((props) => {
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
    const arrayElement = [];
    Array.from({ length: count }, (_, index) => {
      arrayElement.push(
        <CreatePointQuiz
          classNameInput={nameSaveObject}
          key={index}
          index={index}
          hungleDeleteElement={deleteElement}
          hungleSaveValue={hungleSaveValue}
          globalValue={globalValue}
          number={index}
          hungleAddElement={addElement}
          text="Правильный ответ"
          id="currentAnswer"
        />
      );
    });

    setElement(arrayElement);
  }, [...value, count]);

  return element;
});

const CreateListCurrentAnswer = WithChangeJsxObject(CreateCurrentAnswrs);

export { CreateListCurrentAnswer };
