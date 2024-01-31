const outputScreen = document.querySelector('.output-screen');
outputScreen.textContent = "Hello and welcome.";

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		return "rock";
	} else if (randomNumber === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

let playerPoints = 0;
let computerPoints = 0;

const rock = document.querySelector('.rock');
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paper = document.querySelector('.paper');
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissors = document.querySelector('.scissors');
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click', () => {
	playerImg.textContent = "";
	computerImg.textContent = "";
	outputScreen.textContent = "Let's Begin."
	playerPoints = 0;
	computerPoints = 0;
});

const imageScreen = document.querySelector('.image-screen');
const playerImg = document.querySelector('.player-img');
const computerImg = document.querySelector('.computer-img');

paper.addEventListener("click", () => {
	if(playerPoints == 5 || computerPoints == 5) {
		return;
	}
	const img = document.createElement("img");
	img.src = "images/paper.png";
	img.classList.add("paper-img");
	playerImg.innerHTML = "";
	playerImg.appendChild(img);

	const computerSelection = getComputerChoice();
	const compImg = document.createElement("img");
	compImg.src = `images/${computerSelection}.png`;
	compImg.classList.add(`${computerSelection}-img`);
	computerImg.innerHTML = "";
	computerImg.appendChild(compImg);
});

rock.addEventListener("click", () => {
	if(playerPoints == 5 || computerPoints == 5) {
		return;
	}
	const img = document.createElement("img");
	img.src = "images/rock.png";
	img.classList.add("rock-img");
	playerImg.innerHTML = "";
	playerImg.appendChild(img);

	const computerSelection = getComputerChoice();
	const compImg = document.createElement("img");
	compImg.src = `images/${computerSelection}.png`;
	compImg.classList.add(`${computerSelection}-img`);
	computerImg.innerHTML = "";
	computerImg.appendChild(compImg);

});

scissors.addEventListener("click", () => {
	if(playerPoints == 5 || computerPoints == 5) {
		return;
	}
	const img = document.createElement("img");
	img.src = "images/scissors.png";
	img.classList.add("scissors-img");
	playerImg.innerHTML = "";
	playerImg.appendChild(img);

	const computerSelection = getComputerChoice();
	const compImg = document.createElement("img");
	compImg.src = `images/${computerSelection}.png`;
	compImg.classList.add(`${computerSelection}-img`);
	computerImg.innerHTML = "";
	computerImg.appendChild(compImg);
});


function playRound(playerSelection, computerSelection) {
	if(playerPoints == 5) {
		outputScreen.textContent =  "YOU WIN !! \n Ready for another round ??" ;
		return;
	} else if(computerPoints == 5) {
		outputScreen.textContent =  "The Computer Wins. \n Ready for another round ??";
		return;
	}
	if (playerSelection === computerSelection) {
		const outputScreen = document.querySelector('.output-screen');
		outputScreen.textContent += "\n-- ugh, a TIE .";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerPoints++;
		outputScreen.textContent += "\nPlayer's points: " + playerPoints + "\nComputer's points: " + computerPoints;
	} else {
		computerPoints++;
		outputScreen.textContent += "\nPlayer's points: " + playerPoints + "\nComputer's points: " + computerPoints;
	}
	outputScreen.textContent = "";
	outputScreen.textContent += "\nPlayer's points: " + playerPoints + "\nComputer's points: " + computerPoints;

}