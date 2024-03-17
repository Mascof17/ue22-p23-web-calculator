// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Get all the buttons
const buttons = document.querySelectorAll('.calculator__keys button');
const display = document.querySelector('.calculator__display');
const numberButtons = Array.from(buttons).filter(button => !isNaN(button.textContent));    // on crée une array avec les boutons qui sont des chiffres
const equalButton = Array.from(buttons).filter(button => button.textContent === '=');
const clearButton = Array.from(buttons).filter(button => button.textContent === 'AC');
const decimalButton = Array.from(buttons).filter(button => button.textContent === '.');
const operatorButtons = document.querySelectorAll(".key--operator");


var ope_1 = '';
var ope_2 = '';
var firstNumber = '';
var secondNumber = '';
var result = 'pas de calcul'

function operate(operator, a, b) {    // fonction qui réalise les opérations
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



numberButtons.forEach(button => {
  button.addEventListener('click', (event) => {     // on ajoute un event listener à chaque bouton de chiffre

    const clickedButton = event.target;   // on récupère le bouton cliqué
    

    const buttonText = clickedButton.textContent;    // on récupère le texte du bouton cliqué
    

    console.log('Button clicked:', buttonText);
    

    
    if (ope_1 === '') {       // si ope_1 est vide, on ajoute la touche cliquée à firstNumber
      firstNumber = firstNumber + buttonText;
      display.textContent = firstNumber;

    }
    else {      
      if (ope_2 === '') {    // si ope_1 rempli et ope_2 vide, on ajoute la touche cliquée à secondNumber
        secondNumber = secondNumber + buttonText;
        display.textContent = secondNumber;

      }
      else {  // si ope_1 et ope_2 remplis, on réalise le calcul, on met le résultat dans firstNumber et on met la touche cliquée dans secondNumber
        result = String(operate(ope_1, firstNumber, secondNumber));
        firstNumber = result;
        secondNumber = buttonText;
        ope_1 = ope_2;
        ope_2 = '';
        display.textContent = secondNumber;
      }

    }

  });
});





decimalButton[0].addEventListener('click', () => {  // facile
  if (ope_1 === '') {
    firstNumber = firstNumber + '.';
    display.textContent = firstNumber;
  }
  else {
    secondNumber = secondNumber + '.';
    display.textContent = secondNumber;
  }
});



equalButton[0].addEventListener('click', () => {    // on réalise le calcul et on réinitialise les variables

  display.textContent = operate(ope_1, firstNumber, secondNumber);
  ope_1 = '';
  ope_2 = '';
  firstNumber = '';
  secondNumber = '';
});


clearButton[0].addEventListener('click', () => {   // on réinitialise tout
  display.textContent = '0';
  result = 'pas de calcul';
  ope_1 = '';
  ope_2 = '';
  firstNumber = '';
  secondNumber = '';
});




operatorButtons.forEach(button => {   // on ajoute un event listener à chaque bouton d'opérateur
  button.addEventListener('click', (event) => {

    const clicked_button = event.target;
    const operator = clicked_button.getAttribute('data-action');
    // on ajoute la fonction de cet opérateur à ope_1 ou ope_2 en fonction des cas
    if (ope_1 === '') {
      ope_1 = operator;
    }
    else {
      ope_2 = operator;
    }
    display.textContent = operator;

    
  });
});





