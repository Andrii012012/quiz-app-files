function alertMassage(text, duration) {
  const element = document.querySelector(".error");
  element.style.right = "0%";
  element.innerHTML = text;
  setTimeout(() => {
    element.style.right = "-200%";
  }, duration);
}

function changeBorder(item, duration = 4500) {
  const stylesBorder = getComputedStyle(item).border;
  const arrayStyles = stylesBorder.split(" ");
  const arrayColor = [];
  for (let i = 2; i < arrayStyles.length; i++) {
    arrayColor.push(arrayStyles[i]);
  }

  item.style.border = "1px solid red";

  const colorBorder = arrayColor.join(" ");

  setTimeout(() => {
    item.style.border = `1px solid ${colorBorder}`;
  }, duration);
}

const MASSAGE_ERROR = "Ошибка поля, проверьте поле!";

export default function valudation(items, duration = 4500) {
  const isValidation = {
    questions: true,
    answers: true,
    currentAnswers: true,
    category: true,
    fieldQuiz: true,
  };

  if (items.length > 0) {
    items.forEach((item, _) => {
      switch (item.name) {
        case "questions": {
          if (!item.value || item.value > 100 || !Number(item.value)) {
            alertMassage(MASSAGE_ERROR, duration);
            changeBorder(item, duration);
            isValidation.questions = false;
          } else {
            isValidation.questions = true;
          }
          break;
        }
        case "answers": {
          if (!item.value || item.value > 100 || !Number(item.value)) {
            alertMassage(MASSAGE_ERROR, duration);
            changeBorder(item, duration);
            isValidation.answers = false;
          } else {
            isValidation.answers = true;
          }
          break;
        }
        case "currentAnswers": {
          if (!item.value || item.value > 100 || !Number(item.value)) {
            alertMassage(MASSAGE_ERROR, duration);
            changeBorder(item, duration);
            isValidation.currentAnswers = false;
          } else {
            isValidation.currentAnswers = true;
          }
          break;
        }
        case "category": {
          if (!item.value) {
            alertMassage(MASSAGE_ERROR, duration);
            changeBorder(item, duration);
            isValidation.category = false;
          } else {
            isValidation.category = true;
          }
          break;
        }
        case "fieldQuiz": {
          if (!item.value) {
            alertMassage(MASSAGE_ERROR, duration);
            changeBorder(item, duration);
            isValidation.fieldQuiz = false;
          } else {
            isValidation.fieldQuiz = true;
          }
          break;
        }
      }
    });
  }
  let result = [];
  for (let key in isValidation) {
    result.push(isValidation[key]);
  }
  return !result.includes(false);
}
