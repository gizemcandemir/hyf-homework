const script = document.querySelector("script");
const mainUl = document.createElement("ul");
document.body.insertBefore(mainUl, script);

const url = "https://api.github.com/search/repositories?q=user:";

const classmates = [
	{ username: "MirSzabo" },
	{ username: "sowmya1408" },
	{ username: "cecastosic" }
];

const promises = [];

function renderData(value) {
	repos = "";
	value.items.forEach(element => {
		repos += `<li>${element.name}: <a href="${element.html_url}">${element.html_url}</a></li>`;
	});
	return `
		<li>${value.items[0].owner.login}'s repositories</li>
		<ul>
			${repos}
		</ul>
		`;
}

function fetchAllAtOnce(array) {
	array.forEach(element => {
		promises.push(
			fetch(url + element.username)
				.then(value => value.json())
				.then(value => {
					mainUl.innerHTML += renderData(value);
				})
		);
	});
	Promise.all(promises).then(() => {
		console.log(`${array.length} github users' repos are logged.`)
	});
}

fetchAllAtOnce(classmates);
