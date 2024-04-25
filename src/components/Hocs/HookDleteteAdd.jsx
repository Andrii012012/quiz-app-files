import React, { useContext } from "react";
import { useState } from "react";
import { ContextSaveInput } from "../../context/ContextSaveInputValue";

function WithChangeJsxObject(WrapperComponent) {
  return function ChangeJsxObject(props) {
    let { countCreate, hungleSave, idInput, nameSaveObject, index } = props;
    let [globalValue, setGlobalValue] = useContext(ContextSaveInput);
    const [element, setElement] = useState([]);
    const [count, setCount] = useState(countCreate);

    function hungleSaveValue(i, value, event) {
      setGlobalValue((prevState) => {
        const element = event.target;
        const newArray = typeof prevState === "object" ? [...prevState] : [];

        if (element.classList.contains(nameSaveObject)) {
          if (!newArray[index]) {
            newArray[index] = { [nameSaveObject]: [value] };
            hungleSave(newArray[index]);
            return newArray;
          } else {
            if (!(nameSaveObject in newArray[index])) {
              newArray[index] = {
                [nameSaveObject]: [value],
                ...newArray[index],
              };
              hungleSave(newArray[index]);
              return newArray;
            } else {
              newArray[index][nameSaveObject][i] = value;
              hungleSave(newArray[index]);
              return newArray;
            }
          }
        }
      });
    }

    function deleteElement(indexDelete, e) {
      if (document.querySelector(`#${idInput}1`)) {
        setGlobalValue((prevState) => {
          if (
            prevState &&
            prevState[index] &&
            prevState[index][nameSaveObject]
          ) {
            const newArray = [...prevState];
            newArray[index][nameSaveObject].splice(indexDelete, 1);
            hungleSave(newArray[index]);
            return newArray;
          }
        });

        setElement((prevState) => {
          const newArray = [...prevState];
          const filterElement = newArray.map((item, indexElement) => {
            if (indexElement >= indexDelete) {
              const newElement = React.cloneElement(item, {
                globalValue:
                  globalValue &&
                  globalValue[index] &&
                  globalValue[index][nameSaveObject],
              });

              return newElement;
            } else {
              return item;
            }
          });

          filterElement.pop();

          return filterElement;
        });

        setCount((prevState) => Number(prevState) - 1);
      }
    }

    function addElement() {
      setCount((prevState) => Number(prevState) + 1);
    }

    return (
      <WrapperComponent
        deleteElement={deleteElement}
        setElement={setElement}
        element={element}
        count={count}
        globalValue={
          globalValue &&
          globalValue[index] &&
          globalValue[index][nameSaveObject]
        }
        addElement={addElement}
        hungleSaveValue={hungleSaveValue}
        {...props}
      />
    );
  };
}

export { WithChangeJsxObject };
