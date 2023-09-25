const questionForm = document.querySelector('form');
const questionInput = document.querySelector('#question');
const questionList = document.querySelector('.quiz');
const addAnswerButton = document.querySelector('.add-answer-button');
const answersContainer = document.querySelector('.Answers');

addAnswerButton.addEventListener('click', () => {
  const wrongAnswer = document.querySelector('#wrong');
  if (wrongAnswer) {
    const newAnswer = wrongAnswer.cloneNode(true);
    newAnswer.value = '';
    answersContainer.insertBefore(newAnswer, addAnswerButton);
  }
});

questionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const question = questionInput.value;
  displayQuestion(question);
});

function displayQuestion(question) {
  // Clear the question list
  while (questionList.firstChild) {
    questionList.removeChild(questionList.firstChild);
  }
  // Add the new question
  const questionItem = document.createElement('p');
  questionItem.textContent = question;
  questionList.prepend(questionItem);
}