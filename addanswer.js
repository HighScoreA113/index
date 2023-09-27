const addAnswerButton = document.querySelector('.ADDANSWER');
const removeAnswerButton = document.querySelector('.REMOVEANSWER');
const customElement = document.querySelector('.CUSTOM');

addAnswerButton.addEventListener('click', () => {
  const newTextarea = document.createElement('textarea');
  newTextarea.classList.add('WRONG');
  newTextarea.placeholder = 'Insert wrong answer here...';
  customElement.appendChild(newTextarea);
});
removeAnswerButton.addEventListener('click', () => {
  const lastWrongAnswer = customElement.querySelector('.WRONG:last-child');
  if (lastWrongAnswer && !lastWrongAnswer.classList.contains('TOP-WRONG')) {
    customElement.removeChild(lastWrongAnswer);
  }
});
