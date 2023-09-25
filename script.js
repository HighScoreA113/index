const square = document.querySelector('.SQUARE');
const downButton = document.querySelector('.DOWN');

downButton.addEventListener('click', () => {
  const currentHeight = square.clientHeight;
  const newHeight = currentHeight + 50;
  square.style.height = `${newHeight}px`;
});
