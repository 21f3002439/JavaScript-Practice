let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};


updateScoreElement();
// if (score == null) {
//   score = {
//     Wins: 0,
//     Losses: 0,
//     Ties: 0
//   }
// }

function playGame(playerMove) {
const computerMove = getComputerMove();


let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'scissors') {
    result = 'tie';
  } else if (computerMove === 'rock') {
    result = 'You lose!';
  } else {
    result = 'You win!'
  }
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'tie';
    } else if (computerMove === 'paper') { 
    result = 'You lose!';
    } else {
    result = 'You win!'
    }
} else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
    result = 'tie';
    } else if (computerMove === 'scissors') {
    result = 'You lose!';
    } else {
    result = 'You win!'
    } 
}

if (result === 'You win!') {
  score.Wins += 1;
} else if (result === 'You lose!') {
  score.Losses += 1;
} else {
  score.Ties += 1;
}


updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.moves').innerHTML = ` you <img src="images/${playerMove}-emoji.png" class="move-icon">
computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;


localStorage.setItem('score', JSON.stringify(score));
}





function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
}

function getComputerMove() { 
  const computerChoice = Math.floor(Math.random() * 3)
  let computerMove = '';
  
  if (computerChoice === 0) {
    computerMove = 'rock';
  } else if (computerChoice === 1) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}