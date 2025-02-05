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


let secretNumber = 42; // Static secret number
let guessesLeft = 5; // Limit the user to 5 guesses
let userGuess = null;

document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    // Reset the game and progress
    guessesLeft = 5;
    document.getElementById('progress').textContent = `You have ${guessesLeft} guesses left.`;
    
    // Game loop: Allow the user to guess 5 times
    while (guessesLeft > 0) {
        userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        
        if (userGuess === secretNumber) {
            alert("Congrats! You Won!");
            break;
        } else if (userGuess < secretNumber) {
            alert("Too low! Try again.");
        } else if (userGuess > secretNumber) {
            alert("Too high! Try again.");
        }
        
        guessesLeft--;
        updateProgress();
        
        if (guessesLeft === 0) {
            alert("Sorry! You've run out of guesses. The correct number was " + secretNumber);
        }
    }
}

// Function to update the progress:
function updateProgress() {
    document.getElementById('progress').textContent = `You have ${guessesLeft} guesses left.`;
}

