const button = document.querySelector("button");
const input = document.querySelector("input");
const header = document.querySelector("header");
const gameStatus = document.querySelector("div.input");
let winningPlayer = "";

function initGame() {
	gameStatus.innerHTML = `
		<input type="number" id="set-duration" name="quantity" min="1" max="9" placeholder="Set seconds">
		<button>Start game!</button>
	`;
}

function gameOver() {
	// debugger;
	setTimeout(
		() => (gameStatus.innerHTML = "<p>and the winner is...</p>"),
		1 * 1000
	);
	function revealWinner() {
		gameStatus.innerHTML = '<p>and the winner is: <p id="winner"></p></p>';
		winner.classList.add("winner");
		winner.innerText = winningPlayer;
	}
	setTimeout(revealWinner, 2 * 1000);
}

function setGameDuration() {
	const gameDuration = input.value;
	console.log(gameDuration);
	const endGame = () => {
		gameStatus.innerHTML = "<h3>Time's up!</h3>";
		let winner = document.querySelector("p#winner");
		if (player1KeyCount > player2KeyCount) {
			gameOver();
			winningPlayer = "Player 1";
			console.log("The winner is: Player 1!");
		} else if (player1KeyCount === player2KeyCount) {
			window.alert("That's a tie! Do you wanna try again?");
			initGame();
		} else {
			gameOver();
			winningPlayer = "Player 2";
			console.log("The winner is: Player 2!");
		}
		console.log("finish");
	};

	const startGame = () => {
		console.log("start");
		gameStatus.innerHTML =
			"<h3>Game On!</h3><p>You have <p id='seconds'></p> seconds to press your key!</p>";
		let secondsLeft = parseInt(gameDuration);
		function updateSeconds() {
			if (secondsLeft !== 0) {
				secondsLeft -= 1;
				console.log(secondsLeft + ' seconds left');
				let second = document.getElementById("seconds");
				second.innerHTML = secondsLeft;
			} else {
				endGame;
			}
		}

		const countDown = () => setInterval(updateSeconds, 1 * 1000);
		countDown();
		let seconds = document.querySelector("p#seconds");
		seconds.innerText = secondsLeft;
		header.appendChild(gameStatus);
	};
	if (input.value < 1) {
		window.alert("Please set the game duration before submitting.");
	} else {
		console.log(gameDuration);
		window.alert("Press OK to let the game begin!");
		startGame();
	}
	setTimeout(endGame, gameDuration * 1000);
}

button.addEventListener("click", setGameDuration);

const player1 = document.createElement("p");
const player2 = document.createElement("p");
let player1KeyCount = 0;
let player2KeyCount = 0;
player1.innerText = player1KeyCount;
player2.innerText = player2KeyCount;

const game = document.addEventListener("keypress", function() {
	const oldText = player1.textContent;
	player1.textContent = oldText + event.key;
	if (event.key === "s") {
		player1KeyCount += 1;
		console.log("Player 1: ", player1KeyCount);
	} else if (event.key === "l") {
		player2KeyCount += 1;
		console.log("Player 2: ", player2KeyCount);
	}
});
