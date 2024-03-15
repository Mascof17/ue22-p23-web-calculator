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
    display.textContent = buttonText;

  });
});




// Define a variable to store the result
let result = 'pas de calcul';

// Add click event listener to the equal button
equalButton[0].addEventListener('click', () => {                
        // Evaluate the expression and update the display with the result
        display.textContent = result;
});


clearButton[0].addEventListener('click', () => {
    display.textContent = '0';
    result = 'pas de calcul';
});







