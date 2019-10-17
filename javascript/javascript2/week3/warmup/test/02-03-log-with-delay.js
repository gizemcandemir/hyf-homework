// ------ Warmup 2 ------ //
const logWithDelay = (delay, stringToLog) => {
	return () => {
		setTimeout(() => {
		console.log(stringToLog)
		}, delay * 1000);
	}
}

// ------ Warmup 3 ------ //
const button = document.createElement("button");
button.innerText = "log with delay button";
button.classList.add("log-with-delay");
document.body.appendChild(button);

button.addEventListener("click", logWithDelay(1, "This string is logged after one seconds"));
