//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if (Number(guess) === secretNumber) {
  alert("You got it right!");
}

//check if guess is higher
else if (guess > secretNumber) {
  alert("Too high. Guess again!");
}

else {
  prompt("Too low. Guess again!");
}
