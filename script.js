
// should randomly return "Rock", "Paper" or "Scissors".

console.log("Hello and welcome.")

function getComputerChoice() {

	let randomNumber = Math.random() * 100;
	if (randomNumber <= 30) {
		return "rock";
	} else if (randomNumber > 30 && randomNumber <= 65) {
		return "paper";
	} else {
		return "scissors";
	}
}

// -- for testing
// let playerChoice = prompt("Rock, Papers or Scissors ??")
// const playerSelection = playerChoice.toLowerCase()
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

// next is the function to play a single round 
// we match the results of human and computer by comparing

function playRound(playerSelection, computerSelection) {

	let playerPoints = 0;
	let computerPoints = 0;

	console.log("Player's points: " + playerPoints)
	console.log("Computer's points: " + computerPoints)

	if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
		return "You: " + playerSelection + "\nComputer: " + computerSelection + "\n -- ugh, a TIE ."
	}
	else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") ||
		(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() == "rock") ||
		(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper")) {
		playerPoints++
		return "You: " + playerSelection + "\n Computer: " + computerSelection + "\n -- YAY !! You Won :)"
	}
	else {
		computerPoints++
		return "You: " + playerSelection + "\n Computer: " + computerSelection + "\n -- OOPS, You Lose, Try Again :("

	}
}


// a function to play as many rounds of games as user wishes

function game() {
	for (let i = 0; i < 5; i++) {
		let playerChoice = prompt("Rock, Papers or Scissors ??")
		const playerSelection = playerChoice.toLowerCase()
		const computerSelection = getComputerChoice()
		console.log(playRound(playerSelection, computerSelection));
	}
}

// game()


