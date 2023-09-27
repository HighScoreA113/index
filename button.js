const square = document.querySelector('.SQUARE');
const downButton = document.querySelector('.DOWN');
const upButton = document.querySelector('.UP');
const resetButton = document.querySelector('.RESET');

downButton.addEventListener('click', () => {
  const currentHeight = square.clientHeight;
  const newHeight = currentHeight + 50;
  square.style.height = `${newHeight}px`;
});
// Add event listeners to all UP buttons
upButton.addEventListener('click', () => {
  const currentHeight = square.clientHeight;
  const newHeight = currentHeight - 50;
  if (newHeight >= 100) {
    square.style.height = `${newHeight}px`;
  }
});
resetButton.addEventListener('click', () => {
  square.style.height = '200px';
});
