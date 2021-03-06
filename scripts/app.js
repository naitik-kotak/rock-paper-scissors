const playArea = document.getElementById('#play-area');
const playerChoice = document.querySelectorAll('.value');
const displayResult = document.querySelector('.display-result');
const playerCounter = document.querySelector('.player-counter');
const computerCounter = document.querySelector('.computer-counter');
const main = document.querySelector('#main');
let computerSelection;
let playerSelection;
let playerScore;
let computerScore;
let drawScore;

setZeroScore();


// player Selection and round played
playerChoice.forEach((choice) => {
  choice.addEventListener('click', function (e) {
    // Set Selection for a round
    playerSelection = e.target.parentElement.id;
    computerSelection = computerPlay();

    // Generate result of a round
    let result = getResult(playerSelection, computerSelection);

    // Displays the selection with result
    displayResult.innerHTML = `<p>Computer Selected: <span> ${computerSelection}<span></p><p> You Selected: <span> ${playerSelection}</span></p>`;

    if (result === 'You Win') {
      displayResult.innerHTML += `<h2 class='text-success' >${result}</h2>`;
      ++playerScore;
    } else if (result === 'You Lose') {
      displayResult.innerHTML += `<h2 class='text-danger' >${result}</h2>`;
      ++computerScore;
    } else if (result === 'Its a draw') {
      displayResult.innerHTML += `<h2>${result}</h2>`;
      ++drawScore;
    }

    playerCounter.innerHTML = `<p class='d-inline text-dark font-weight-bolder'>Your Score: <span class='text-body'>${playerScore}</span></p>`;
    computerCounter.innerHTML = `<p class='d-inline text-dark font-weight-bolder'>Computer Score: <span class='text-body'>${computerScore}</span></p>`;

    // Result after 5 rounds
    if (playerScore + computerScore + drawScore === 5) {
      if (playerScore > computerScore) {
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-success');
        main.innerHTML = `<h2 class="text-white">YOU WIN THE GAME</h2> <input type='button' class='btn btn-warning my-3 mb-3' value="Play again" onclick='window.location.reload()'>`;
        main.classList.add('center-it');

      } else if (computerScore > playerScore) {
        document.body.classList.remove('bg-light');
        document.body.classList.add('bg-danger');
        main.innerHTML = `<h2 class="text-white" >YOU LOSE THE GAME</h2> <input type='button' class='btn btn-warning my-3 mb-3' value="Play again" onclick='window.location.reload()'>`;
        main.classList.add('center-it');
      } else if (playerScore === computerScore) {
        main.innerHTML = `<h2 class='text-body'>ITS A DRAW</h2>  <input type='button' class='btn btn-secondary my-3 mb-3' value="Play again" onclick='window.location.reload()'>`;

        main.classList.add('center-it');
      }
      setZeroScore();
    }

    
  });
});



//Computer selection
// Random value generated by Computer
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get Results
function getResult(player, computer) {
  if (player === computer) {
    return 'Its a draw';
  } else if (player === 'rock' && computer === 'paper') {
    return 'You Lose';
  } else if (player === 'rock' && computer === 'scissors') {
    return 'You Win';
  } else if (player === 'paper' && computer === 'rock') {
    return 'You Win';
  } else if (player === 'paper' && computer === 'scissors') {
    return 'You Lose';
  } else if (player === 'scissors' && computer === 'rock') {
    return 'You Lose';
  } else if (player === 'scissors' && computer === 'paper') {
    return 'You Win';
  }
}

// Set all scores to 0
function setZeroScore() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
}