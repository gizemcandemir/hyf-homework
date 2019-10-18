const button = document.querySelector("button");
const input = document.querySelector("input");

function setGameDuration() {
	const gameDuration = input.value;
	const startGame = () => {
		console.log("start");
	}
	if (input.value < 1) {
		window.alert("Please set the game duration before submitting.");
	} else {
		console.log(gameDuration);
		startGame();
	}
	const endGame = () => {
		console.log("finish");
	}
	setTimeout(endGame, gameDuration * 1000);
}

button.addEventListener("click", setGameDuration);

