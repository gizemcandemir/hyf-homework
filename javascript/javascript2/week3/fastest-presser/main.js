const header = document.querySelector("header");
const gameStatus = document.querySelector("div.status");
const player1Count = document.querySelector("div#player1 p.count");
const player2Count = document.querySelector("div#player2 p.count");

let winnerCanvas;

function prepareForm() {
	gameStatus.innerHTML = `
	<input type="number" id="set-duration" name="quantity" min="1" max="9" placeholder="Set seconds">
	<button>Start game!</button>
	`;
	input = document.querySelector("input");
	button = document.querySelector("button");
	button.addEventListener("click", startGame);
}

function initGame() {
	resetGameState();
	prepareForm();

	document.addEventListener("keyup", () => {
		if (!isGameOver) {
			if (event.key === "s") {
				player1Count.innerText = ++player1KeyCount;
			} else if (event.key === "l") {
				player2Count.innerText = ++player2KeyCount;
			}
		}
	});
}

function resetGameState() {
	isGameOver = false;
	gameDuration = 0;

	player1KeyCount = 0;
	player2KeyCount = 0;
	
	winningPlayer = "";
}

function gameOver() {
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
	setTimeout(function() {
		if (player1KeyCount === player2KeyCount) {
			window.alert("That's a tie! Let's start over again");
			prepareForm();
		} else {
			let winner = document.querySelector("p#winner");
			if (player1KeyCount > player2KeyCount) {
				winningPlayer = "Player 1";
				confettiSettings = { target: "confetti-1" };
			} else {
				winningPlayer = "Player 2";
				confettiSettings = { target: "confetti-2" };
			}
			gameOver();
			const confetti = new ConfettiGenerator(confettiSettings);
			confetti.render();
		}
	}, 10);
}

function startGame() {
	resetGameState();
	
	if (input.value < 1) {
		window.alert("Please set the game duration.");
		return;
	} else {
		gameDuration = input.value;
	}

	gameStatus.innerHTML =
		"<h3>Game On!</h3><p>You have <p id='seconds'></p> seconds to press your key!</p>";
	header.appendChild(gameStatus);

	let secondsLeft = gameDuration;

	document.getElementById("seconds").innerHTML = secondsLeft;

	const countDown = setInterval(function() {
		secondsLeft--;
		document.getElementById("seconds").innerHTML = secondsLeft;
		if (secondsLeft === 0) {
			isGameOver = true;
			clearInterval(countDown);
			setTimeout(() => endGame(), 1000);
		}
	}, 1000);

	let secondsP = document.querySelector("p#seconds");
	secondsP.innerText = secondsLeft;
}

initGame();
