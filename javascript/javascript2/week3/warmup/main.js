const div = document.createElement("div");
document.body.appendChild(div);

// ------ Warmup 1 ------ //
function logAfter2andAHalfSec() {
	setTimeout(print, 2.5 * 1000); 
}

const print = function print() {
	console.log("Called after 2.5 seconds");
};

logAfter2andAHalfSec();

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


// ------ Warmup 4 ------ //
const earthLogger = () => {
	console.log("Earth");
};

const saturnLogger = () => {
	console.log("Saturn");
};

function planetLogFunction(el) {
	return el();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// ------ Warmup 5 ------ //

const button2 = document.createElement("button");
button2.innerText = "Log location";
button2.classList.add("log-location");
document.body.appendChild(button2);
const mapDiv = document.createElement("div");
document.body.appendChild(mapDiv);

function logLocation() {
	return () => {
		navigator.geolocation.getCurrentPosition(success, error, options);
	};
}

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};

function success(pos) {
	const crd = pos.coords;

	console.log(
		`Your current position is: \n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}\nMore or less ${crd.accuracy} meters.`
	);

	function printLocationInfo() {
		const div = document.createElement("div");
		div.classList.add("map");
		mapDiv.appendChild(div);
		const p = document.createElement("p");
		div.appendChild(p);
		p.innerText = `Your current position is: \n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}\nThat's more or less ${crd.accuracy} meters.`;
	}

	return printLocationInfo();
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

button2.addEventListener("click", logLocation());

// ------ Warmup 6 ------ //
// will try later...

// ------ Warmup 7 ------ //
const div7 = document.createElement("div");
div7.classList.add("pop-up");
div7.innerText = "*.*";
document.body.appendChild(div7);

function runAfterDelay(delay, callback) {
	setTimeout(callback, delay * 1000);
}

runAfterDelay(4, function() {
	console.log("should be logged after 4 seconds");
});

runAfterDelay(2, () => {
	div7.innerText = "*.0";
});

runAfterDelay(3, () => {
	div7.innerText = "*.*";
});

// ------ Warmup 8 ------ //

// ------ Warmup 9 ------ //

const FunnyJokes = [
	"- My boss told me to have a good day.. so I went home.",
	"- I'm so good at sleeping. I can do it with my eyes closed.",
	"- My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
	"- Why is Peter Pan always flying? He neverlands.",
	"- When you look really closely, all mirrors look like eyeballs.",
	"- Parallel lines have so much in common. It’s a shame they’ll never meet."
];
const BadJokes = [
	"- I couldn't figure out why the baseball kept getting larger. Then it hit me.",
	"- Why did the old man fall in the well? Because he couldn't see that well.",
	"- I know a lot of jokes about unemployed people but none of them work.",
	"- Where do you find a cow with no legs? Right where you left it.",
	"- Why couldn't the bicycle stand up? Because it was two tired!",
	"- What did the traffic light say to the car? Don’t look! I’m about to change."
];

const divJoke = document.createElement("div");
divJoke.classList.add("joke");
document.body.appendChild(divJoke);
randomIndexNo = Math.ceil(Math.random() * 5);
const p = document.createElement("p");
p.classList.add("joke");
document.body.appendChild(p);

const shouldTellFunnyJoke = () => {
	return Math.random() >= 0.5;
};

const logFunnyJoke = () => {
	divJoke.innerHTML = `Let me tell you a <strong>funny</strong> joke:<br><br>${FunnyJokes[randomIndexNo]}`;
	p.innerHTML = "&#128514";
};

const logBadJoke = () => {
	divJoke.innerHTML = `Ok, you asked for a <strong>bad</strong> joke:<br><br>${BadJokes[randomIndexNo]}`;
	p.innerHTML = "&#128584";
};

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
	if (shouldTellFunnyJoke()) {
		return logFunnyJoke();
	} else {
		return logBadJoke();
	}
}

jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke);
