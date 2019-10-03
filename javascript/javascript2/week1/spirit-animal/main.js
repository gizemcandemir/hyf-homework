const spiritAnimalNames = ["fullmoon wolf", "golden armadillo", "flying angelfish", "blue wolf", "rain turtle", "silent snake", "shadow bear", "sparkling beetle", "dancing hedgehog", "unicorn zebra"];

const h1 = document.createElement("h1");
const div = document.createElement("div");
const h2 = document.createElement("h2");
const input = document.createElement("input");
const button = document.createElement("button");
const p = document.createElement("p");

document.body.appendChild(h1);
document.body.appendChild(div);
div.appendChild(h2);
div.appendChild(input);
div.appendChild(button);
document.body.appendChild(p);

h1.innerText = "Spirit Animal Generator";
h2.innerText = "Please write your name here so we can find your spirit animal";
button.innerText = "Go For It";

function isReturnPressed(e) {
    if (e.keyCode === 13) {
        generateSA();
    }
}

function generateSA() {
    if (input.value) {
        const random = Math.floor(Math.random() * spiritAnimalNames.length);
        h2.innerHTML = `${input.value} - the ${spiritAnimalNames[random]}`;
        p.innerHTML = "Psst...  If you think it's not a good match, just click the button for another one!";
    } else {
        h2.innerHTML = "Please tell me your name";
    }
}

input.addEventListener("keypress", isReturnPressed);
button.addEventListener("click", generateSA);