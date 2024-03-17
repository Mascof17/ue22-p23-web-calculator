// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Get all the buttons
const buttons = document.querySelectorAll('.calculator__keys button');
const display = document.querySelector('.calculator__display');
const numberButtons = Array.from(buttons).filter(button => !isNaN(button.textContent));
const equalButton = Array.from(buttons).filter(button => button.textContent === '=');
const clearButton = Array.from(buttons).filter(button => button.textContent === 'AC');
const decimalButton = Array.from(buttons).filter(button => button.textContent === '.');
const operatorButtons = document.querySelectorAll(".key--operator");


var ope_1 = '';
var ope_2 = '';
var firstNumber = '';
var secondNumber = '';
var result = 'pas de calcul'

function operate(operator, a, b) {
  switch (operator) {
    case 'add':
      return Number(a) + Number(b);
    case 'substract':
      return Number(a) - Number(b);
    case 'multiply':
      return Number(a) * Number(b);
    case 'divide':
      return Number(a) / Number(b);
  }
}



// Add click event listener to each button
numberButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the clicked button
    const clickedButton = event.target;
    
    // Get the text content of the clicked button
    const buttonText = clickedButton.textContent;
    
    // Perform any desired action based on the clicked button
    console.log('Button clicked:', buttonText);
    
    // Update the display with the clicked button text
    
    if (ope_1 === '') {
      firstNumber = firstNumber + buttonText;
      display.textContent = firstNumber;

    }
    else {
      if (ope_2 === '') {
        secondNumber = secondNumber + buttonText;
        display.textContent = secondNumber;

      }
      else {
        result = toString(operate(ope_1, firstNumber, secondNumber));
        firstNumber = result;
        secondNumber = secondNumber + buttonText;
        ope_1 = ope_2;
        ope_2 = '';
        display.textContent = secondNumber;
      }

    }

  });
});




// Define a variable to store the result


// Add click event listener to the equal button
equalButton[0].addEventListener('click', () => {
  // Evaluate the expression and update the display with the result
  display.textContent = operate(ope_1, firstNumber, secondNumber);
  ope_1 = '';
  ope_2 = '';
  firstNumber = '';
  secondNumber = '';
});


clearButton[0].addEventListener('click', () => {
  display.textContent = '0';
  result = 'pas de calcul';
  ope_1 = '';
  ope_2 = '';
  firstNumber = '';
  secondNumber = '';
});




operatorButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the operator name from the data-action attribute
    const clicked_button = event.target;
    const operator = clicked_button.getAttribute('data-action');
    // Display the operator name on the calculator display
    if (ope_1 === '') {
      ope_1 = operator;
    }
    else {
      ope_2 = operator;
    }
    display.textContent = operator;

    
  });
});





