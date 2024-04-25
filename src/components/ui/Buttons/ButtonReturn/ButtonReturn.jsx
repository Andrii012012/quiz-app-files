import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ButtonReturn = memo((props) => {
  let { className } = props;

  const beBack = useNavigate();

  return (
    <button
      aria-label="Кнопка назад"
      tabIndex="1"
      className={className}
      onClick={() => {
        beBack("/");
      }}
    >
      Вернутся назад
    </button>
  );
});

export default ButtonReturn;
