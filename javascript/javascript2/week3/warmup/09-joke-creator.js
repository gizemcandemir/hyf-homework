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

const div = document.createElement("div");
div.classList.add("joke");
document.body.appendChild(div);
randomIndexNo = Math.ceil(Math.random() * 5);
const p = document.createElement("p");
p.classList.add("joke");
document.body.appendChild(p);

const shouldTellFunnyJoke = () => {
	return Math.random() >= 0.5;
};

const logFunnyJoke = () => {
	div.innerText = `Let me tell you a funny joke:\n\n${FunnyJokes[randomIndexNo]}`;
	p.innerHTML = "&#128514";
};

const logBadJoke = () => {
	div.innerText = `Ok, you asked for a bad joke:\n\n${BadJokes[randomIndexNo]}`;
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
