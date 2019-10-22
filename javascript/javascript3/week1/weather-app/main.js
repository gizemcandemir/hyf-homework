const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const APP_ID = "appid=0e77f93fa96998c5a8997c761aaba15a";

const flags = "https://openweathermap.org/images/flags/" + "" + ".png";

const input = document.querySelector("input");
const button = document.querySelector("button");

const displayDiv = document.querySelector("body");
let sunrise = "";
let sunset = "";
const convertedTime = "";

button.addEventListener("click", renderSearchResults);

function fetchJSON(url) {
	return fetch(url).then(response => response.json());
}

function renderSearchResults() {
	const searchQuery =
		BASE_URL + "weather?q=" + input.value + "&" + APP_ID + "&units=metric";
	fetchJSON(searchQuery).then(data => {
		renderWeatherDetails(data);
	});
}

const renderWeatherDetails = data => {
	let temp = Math.round(data.main.temp);
	renderTempBasedUI(temp);

	sunrise = convertTime(data.sys.sunrise);
	sunset = convertTime(data.sys.sunset);

	document.querySelector(".display").innerHTML = `
    <h1>${data.name}</h1>
    <h2>${data.main.temp.toFixed(1)} °C</h2>
    <img src="http://openweathermap.org/img/wn/${
			data.weather[0].icon
		}@2x.png" alt="">
    <p id="wind-speed">Wind speed: ${data.wind.speed}</p>
    <p id="how-cloudy">Cloudiness: ${data.clouds.all}%</p>
    <p id="sunrise"><img src="./sunrise.svg" alt="sunrise"> Sunrise: ${sunrise}</p>
    <p id="sunrise"><img src="./sunset.svg" alt="sunset"> Sunset: ${sunset}</p>`;
};

function renderTempBasedUI(temp) {
	displayDiv.classList.remove(
		"burning",
		"hot",
		"mild",
		"chill",
		"cold",
		"freezing"
	);

	if (temp > 35) {
		displayDiv.classList.add("burning");
	} else if (temp > 25) {
		displayDiv.classList.add("hot");
	} else if (temp > 16) {
		displayDiv.classList.add("mild");
	} else if (temp > 8) {
		displayDiv.classList.add("chill");
	} else if (temp > -5) {
		displayDiv.classList.add("cold");
	} else {
		displayDiv.classList.add("freezing");
	}
}

function convertTime(unixTime) {
	const unixtimestamp = unixTime;
	const date = new Date(unixtimestamp * 1000);
	const hours = date.getHours();
	const minutes = "0" + date.getMinutes();
	const convertedTime = hours + ":" + minutes.substr(-2);
	return convertedTime;
}
