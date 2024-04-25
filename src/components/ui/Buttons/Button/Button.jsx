import React from "react";
import "./buttonStyle.css";

export default function Button(props) {
  let {
    className = "",
    type = "button",
    text,
    ariaLabel = "Кнопка",
    hungleFunc = null,
    classNameParent = '',
  } = props;

  return (
    <div className={`button-body ${classNameParent}`}>
      {!hungleFunc ? (
        <button
          className={`button ${className}`}
          type={type}
          aria-label={ariaLabel}
        >
          {text}
        </button>
      ) : (
        <button
          className={`button ${className}`}
          type={type}
          aria-label={ariaLabel}
          onClick={(e) => hungleFunc(e)}
        >
          {text}
        </button>
      )}
    </div>
  );
}
