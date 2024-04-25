function findElement(count, id) {
  const saveInput = [];
  if (id.length > 0) {
    for (let i = 0; i <= count; i++) {
      if (document.querySelector(`#${id}${i}`)) {
        if (!saveInput.includes(document.querySelectorAll(`#${id}${i}`))) {
          const allElement = document.querySelectorAll(`#${id}${i}`);
          allElement.forEach((element) => {
            saveInput.push(element);
          });
        }
      }
    }
  }
  return saveInput;
}

export default findElement;
