console.log("======================================")
console.log("Part 1: Requirements");
console.log("======================================")
//You will create a simple guessing game. Using window methods, you will give and receive information from the user in order to direct them toward the correct answer in a limited number of guesses.
//Here is a list of requirements for easy reference:
// 1. Create a simple guessing game that pushes users toward the correct answer in some iterative way. The game does not need to be practical or complicated.
// 2. Use window object methods to gather input from the user and display information to the user.
// 3. Use DOM manipulation to give a visual indication of the game's progress in some way.




console.log("======================================")
console.log("Part 2: Examples and Hints");
console.log("======================================")
//We recommend starting simple, with numbers. Since numbers can be easily compared with conditional logic, alerting the user to the state of their last guess becomes relatively easy.

//The answer to your game can be static or dynamic. You can set one answer that is always the answer, regardless of page reloads or other conditions, or you could randomly generate the answer using something like Math.random() and/or a list of set answers.




console.log("======================================")
console.log("Part 3: Building the Game");
console.log("======================================")
//Once you have an idea in mind, begin building. Remember that this can be a very simple game!



//if (isNan(userInput) || userInput < 1 || ....

// Set up the target number for the user to guess.
const targetNumber = 7; // This is the number the player needs to guess.

let remainingGuesses = 5; // Set the number of guesses allowed.
let guessHistory = []; // To store the user's guesses.

// Grab the app container
const app = document.getElementById('app');

// Create and style the progress and result elements dynamically
const progressDisplay = document.createElement('div');
const resultDisplay = document.createElement('div');

// Set initial styles for the progress and result display
progressDisplay.id = 'progress';
resultDisplay.id = 'result';

// Style the elements dynamically using DOM manipulation
Object.assign(progressDisplay.style, {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '5px',
});

Object.assign(resultDisplay.style, {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '5px',
    color: 'green', // We'll change this color later if the game ends in failure
});

// Append the

