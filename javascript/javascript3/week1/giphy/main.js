const BASE_URL = "https://api.giphy.com/v1/gifs/search?";
const APP_ID = "api_key=H8y0gVlIV1y5leb7InXZ28X880GEgcPS";

const loader = document.querySelector("#loader");
const input = document.querySelector("input#query");
const limit = document.querySelector("input#limit");
const button = document.querySelector("button");
const display = document.querySelector(".display");
const gifListUl = document.createElement("ul");
display.appendChild(gifListUl);

let limitdefault = 15;
const gifList = [];

const searchQuery = "&q=" + input.value;
const limitQuery = "&limit=" + limitdefault;
const options = "&offset=0&rating=G&lang=en";

button.addEventListener("click", renderSearchResults);
input.addEventListener("keyup", e => {
	if (e.key === "Enter") {
		renderSearchResults();
	}
});
limit.addEventListener("keyup", e => {
	if (e.key === "Enter") {
		renderSearchResults();
	}
});


function fetchJSON(url) {
	return fetch(url).then(response => response.json());
}

function renderSearchResults() {
	loader.classList.add("show-loader");
	const searchQuery = "&q=" + input.value;
	const limitQuery = "&limit=" + (limit.value || limitdefault);
	request = BASE_URL + APP_ID + searchQuery + limitQuery + options;

	fetchJSON(request).then(data => {
		if (input.value) {
			renderGifs(data);
		} else {
			window.alert("Please type something before search");
		}
	});
}

function renderGifs(data) {
	loader.classList.add("hide-loader");
	const gifUrlArray = data.data.map(element => element.images.fixed_width.url);

	gifListUl.innerHTML = "";

	gifUrlArray.forEach(function(url) {
		const gifLi = document.createElement("li");
		gifLi.innerHTML = `<a href="${url}"><img src="${url}" alt=""></a>`;
		gifListUl.appendChild(gifLi);
	});
}
