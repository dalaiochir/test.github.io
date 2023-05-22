var questions = ['Biggest Mammal?', 'Fastest vehicle?'];
var answers = ['Whale', 'Jet'];

var selectedQuestion;
var selectedAnswer;
var currentWord;
var wrongGuesses;
var maxWrongGuesses = 6;
var gameOver = false;

function startGame() {
  // Reset game variables
  selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
  selectedAnswer = answers[questions.indexOf(selectedQuestion)];
  currentWord = '';
  wrongGuesses = 0;
  gameOver = false;

  // Display question
  document.getElementById('question').textContent = selectedQuestion;

  // Generate blanks for answer
  for (var i = 0; i < selectedAnswer.length; i++) {
    currentWord += '_';
  }
  document.getElementById('word').textContent = currentWord;

  // Create letter buttons
  var lettersContainer = document.getElementById('letters');
  lettersContainer.innerHTML = '';
  for (var letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    var button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', handleGuess);
    lettersContainer.appendChild(button);
  }

  // Clear hangman display
  document.getElementById('hangman').textContent = '';

  // Disable letter buttons
  var buttons = lettersContainer.getElementsByTagName('button');
  for (var button of buttons) {
    button.disabled = false;
  }
}

function handleGuess(event) {
  if (gameOver) return;

  var guessedLetter = event.target.textContent;
  event.target.disabled = true;

  if (selectedAnswer.includes(guessedLetter)) {
    // Correct guess
    for (var i = 0; i < selectedAnswer.length; i++) {
      if (selectedAnswer[i] === guessedLetter) {
        currentWord = replaceChar(currentWord, i, guessedLetter);
      }
    }

    document.getElementById('word').textContent = currentWord;

    if (currentWord === selectedAnswer) {
      // Win condition
      endGame('Congratulations, you won!');
    }
  } else {
    // Wrong guess
    wrongGuesses++;
    updateHangman();

    if (wrongGuesses >= maxWrongGuesses) {
      // Loss condition
      endGame('Game over. You lost!');
    }
  }
}

function replaceChar(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

function updateHangman() {
  var hangmanDisplay = '';
  for (var i = 0; i < wrongGuesses; i++) {
    hangmanDisplay += 'X ';
    }
    document.getElementById('hangman').textContent = hangmanDisplay;
    }
    
    function endGame(message) {
    gameOver = true;
    document.getElementById('hangman').textContent = '';
    alert(message);
    }
    
    // Start the game
    startGame();