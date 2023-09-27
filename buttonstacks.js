const rightTextareas = document.querySelectorAll('.RIGHT');
const wrongTextareas = document.querySelectorAll('.WRONG');
const upStackButtons = document.querySelectorAll('.UP-STACK');
const downStackButtons = document.querySelectorAll('.DOWN-STACK');
const resetStackButtons = document.querySelectorAll('.RESET-STACK');

// Add event listeners to all UP-STACK buttons
upStackButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const currentHeight = rightTextareas[index].clientHeight;
      const newHeight = currentHeight - 50;
      if (newHeight >= 100) {
        rightTextareas[index].style.height = `${newHeight}px`;
        wrongTextareas.forEach((textarea) => {
          textarea.style.height = `${newHeight}px`;
        });
      }
    });
  });
  // Add event listeners to all DOWN-STACK buttons
  downStackButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const currentHeight = rightTextareas[index].clientHeight;
      const newHeight = currentHeight + 50;
      rightTextareas[index].style.height = `${newHeight}px`;
      wrongTextareas.forEach((textarea) => {
        textarea.style.height = `${newHeight}px`;
      });
    });
  });
  // Add event listeners to all RESET-STACK buttons
  resetStackButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      rightTextareas[index].style.height = '100px';
      wrongTextareas.forEach((textarea) => {
        textarea.style.height = '100px';
      });
    });
  });
