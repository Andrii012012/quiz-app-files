function saveQuizes(name, quiz, category) {
  const prevStateLocalStorage = localStorage.getItem([name]);
  const parseState = JSON.parse(prevStateLocalStorage);
  const saveAllElement = { ...(parseState || {}) };

  if (!saveAllElement[category]) {
    saveAllElement[category] = [];
  }

  const isQuiz = saveAllElement[category].some((item) => {
    return JSON.stringify(item) === JSON.stringify(quiz);
  });

  if (!isQuiz) {
    if (quiz !== undefined) {
      saveAllElement[category].push(quiz);
      localStorage.setItem([name], JSON.stringify(saveAllElement));
    }
  }

  return saveAllElement;
}

export default saveQuizes;
