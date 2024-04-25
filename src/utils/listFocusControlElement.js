let counter = 0;

function listFocusControlElement(e) {
  const items = e.target.children;
  const arraySave = [];

  for (let element = 0; element < items.length; element++) {
    arraySave.push(items[element]);
  }

  if (arraySave[0] !== undefined) {
    arraySave[0].focus();
  }

  window.addEventListener("keydown", (event) => {
    if (arraySave[counter] !== undefined) {
      if (event.key === "ArrowDown") {
        if (arraySave.length - 1 != counter) {
          counter++;
          arraySave[counter].focus();
        } else {
          counter = 0;
          console.log(arraySave[counter]);
          arraySave[counter].focus();
        }
      } else if (event.key === "ArrowUp") {
        if (counter !== 0) {
          counter--;
          arraySave[counter].focus();
        } else {
          counter = arraySave.length - 1;
          arraySave[counter].focus();
        }
      }
    }
  });
}

export default listFocusControlElement;
