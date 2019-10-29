// const BASE_URL = "https://api.giphy.com/v1/";
const BASE_URL = "https://api.giphy.com/v1/gifs/search?";
const APP_ID = "api_key=H8y0gVlIV1y5leb7InXZ28X880GEgcPS";

const input = document.querySelector("input#query");
const limit = document.querySelector("input#limit");
const button = document.querySelector("button");
const display = document.querySelector(".display");
let limitdefault = 1;

const searchQuery = "&q=" + input.value;
const limitQuery = "&limit=" + limitdefault;
const options = "&offset=0&rating=G&lang=en";

button.addEventListener("click", renderSearchResults);
input.addEventListener("keyup", e => {
	if (e.key === "Enter") {
		renderSearchResults();
	}
});

function fetchJSON(url) {
	return fetch(url).then(response => response.json());
}

function renderSearchResults() {
	request = BASE_URL + APP_ID + searchQuery + limitQuery + options;
console.log(request);

	fetchJSON(request).then(data => {
		if (input.value) {
			renderGifs(data);
		} else {
			window.alert("Please type something before search");
		}
	});
}

function createList() {
	data.forEach(function(element) {
		const ul = display.createElement("ul");
	});
}

function renderGifs(data) {
	console.log(data[0]);
	display.innerHTML = `<img src="${data[0].url}" alt="${data[0].title}">`
}