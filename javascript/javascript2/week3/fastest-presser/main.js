const header = document.querySelector("header");
const input = document.querySelector("input");
const button = document.querySelector("button");

const gameStatus = document.querySelector("div.status");
let gameDuration = 0;
let isGameOver;

let player1KeyCount;
let player2KeyCount;

const player1Count = document.querySelector("div#player1 p.count");
const player2Count = document.querySelector("div#player2 p.count");

let winningPlayer;
let winnerCanvas;

function resetState() {
	isGameOver = false;

	player1KeyCount = 0;
	player2KeyCount = 0;

	player1Count.innerText = player1KeyCount;
	player2Count.innerText = player2KeyCount;

	gameStatus.innerHTML = `
		<input type="number" id="set-duration" name="quantity" min="1" max="9" placeholder="Set seconds">
		<button>Start game!</button>
	`;
}

function gameOver() {
	debugger;
	setTimeout(() => {
		gameStatus.innerHTML =
			'<h3></h3><p>and the winner is: <p id="winner" class="grayed-out">________</p></p>';
	}, 1000);
	setTimeout(() => {
		gameStatus.innerHTML =
			'<h3></h3><p>and the winner is: <p id="winner"></p></p>';
		winner.classList.add("winner");
		winner.innerText = winningPlayer;
	}, 2000);
}

function endGame() {
	gameStatus.innerHTML = "<h3>Time's up!</h3>";
	let winner = document.querySelector("p#winner");
	if (player1KeyCount === player2KeyCount) {
		window.alert("That's a tie! Let's start over again");
		resetState();
	} else {
		if (player1KeyCount > player2KeyCount) {
			winningPlayer = "Player 1";
			winnerDiv = document.querySelector("#player1");
			winnerCanvas = document.createElement("canvas");
			winnerCanvas.setAttribute("id", "confetti");
			winnerDiv.appendChild(winnerCanvas);
		} else {
			winningPlayer = "Player 2";
			winnerDiv = document.querySelector("#player2");
			winnerCanvas = document.createElement("canvas");
			winnerCanvas.setAttribute("id", "confetti");
			winnerDiv.appendChild(winnerCanvas);
		}
		gameOver();
		const confettiSettings = { target: "confetti" };
		const confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();
	}
}

function startGame() {
	resetState();

	const countDown = setInterval(updateSeconds, 1000);

	gameStatus.innerHTML =
		"<h3>Game On!</h3><p>You have <p id='seconds'></p> seconds to press your key!</p>";
	header.appendChild(gameStatus);

	let secondsLeft = gameDuration;

	document.addEventListener("keypress", () => {
		if (!isGameOver) {
			if (event.key === "s") {
				player1Count.textContent = ++player1KeyCount;
			} else if (event.key === "l") {
				player2Count.textContent = ++player2KeyCount;
			}
		}
	});

	function updateSeconds() {
		document.getElementById("seconds").innerHTML = secondsLeft;
		if (secondsLeft > 0) {
			secondsLeft--;
		} else {
			isGameOver = true;
			clearInterval(countDown);
			endGame();
		}
	}

	let secondsP = document.querySelector("p#seconds");
	secondsP.innerText = secondsLeft;
}

function initGame() {
	gameDuration = input.value;
	if (input.value < 1) {
		window.alert("Please set the game duration.");
	} else {
		startGame();
	}
}

button.addEventListener("click", initGame);
