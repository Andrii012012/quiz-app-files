import React from "react";
import "./listFieldsStyle.css";

export default function ListFields(props) {
  let { list, setValue } = props;
  return (
    <>
      {list.map((item, _) => (
        <div
          key={item.text}
          className="collect-info__with-input create-quiz__block"
        >
          <label className="description-input" htmlFor={item.id}>
            {item.text}
          </label>
          <input
            ref={item.ref}
            className="collect-info__input-info"
            type="text"
            name={item.name}
            id={item.id}
            placeholder={item.text}
            onChange={(e) => {
              setValue((prevState) => {
                const newObject = { ...prevState };
                newObject[item.changeKey] = Math.abs(e.target.value);
                return newObject;
              });
            }}
          />
        </div>
      ))}
    </>
  );
}
