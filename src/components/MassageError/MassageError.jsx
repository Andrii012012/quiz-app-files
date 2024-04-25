import "./massageErrorStyle.css";
import "./massageErrorMedia.css";
import { memo } from "react";
import ButtonReturn from "../ui/Buttons/ButtonReturn/ButtonReturn";

const MassageError = memo((props) => {
  let { text } = props;

  return (
    <section className="message-info block-quiz">
      <div className="message-info__container">
        <h1 className="message-info__title">{text}</h1>
        <ButtonReturn
          className={
            "message-info__btn-call-back button-active button-color-two"
          }
        />
      </div>
    </section>
  );
});

export default MassageError;
