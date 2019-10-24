const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const APP_ID = "appid=0e77f93fa96998c5a8997c761aaba15a";

const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");
const loader = document.querySelector(".loader");

let searchQuery = "";
let sunrise = "";
let sunset = "";
const convertedTime = "";
let lat;
let lon;
const country = "";

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
	loader.classList.add("show-loader");
	searchQuery =
		BASE_URL + "weather?q=" + input.value + "&" + APP_ID + "&units=metric";
	fetchJSON(searchQuery).then(data => {
		if (input.value) {
			renderWeatherDetails(data);
		} else {
			window.alert("Please type a city name");
		}
	});
}

const renderWeatherDetails = data => {
	let temp = Math.round(data.main.temp);
	renderTempBasedUI(temp);

	/* I tried something but it didn't work, so I just keep it here for future tries. */

	// cityList.forEach(function(object) {
	// 	if (object.name === data.name) {
	// 		country = object.country;
	// 	} console.log(country);
	// });

	sunrise = convertTime(data.sys.sunrise);
	sunset = convertTime(data.sys.sunset);

	let cityLat = data.coord.lat;
	let cityLon = data.coord.lon;
	renderLocationOnGoogleMap(cityLat, cityLon);

	document.querySelector(".display").innerHTML = `
    <h1>${data.name}</h1>
    <h2>${data.main.temp.toFixed(1)} °C</h2>
    <img src="http://openweathermap.org/img/wn/${
			data.weather[0].icon
		}@2x.png" alt="">
    <p id="wind-speed">Wind speed: ${data.wind.speed}</p>
    <p id="how-cloudy">Cloudiness: ${data.clouds.all}%</p>
    <p id="sunrise"><img src="images/sunrise.svg" alt="sunrise"> Sunrise: ${sunrise}</p>
		<p id="sunrise"><img src="images/sunset.svg" alt="sunset"> Sunset: ${sunset}</p>`;
};

function renderSearchByCoordinates(lat, lon) {
	searchQuery =
		BASE_URL +
		"weather?lat=" +
		lat +
		"&lon=" +
		lon +
		"&" +
		APP_ID +
		"&units=metric";
	console.log(searchQuery);
	fetchJSON(searchQuery).then(data => {
		renderWeatherDetails(data);
	});
}

function renderTempBasedUI(temp) {
	loader.classList.add("hide-loader");
	body.classList.remove("burning", "hot", "mild", "chill", "cold", "freezing");

	if (temp > 35) {
		body.classList.add("burning");
	} else if (temp > 25) {
		body.classList.add("hot");
	} else if (temp > 16) {
		body.classList.add("mild");
	} else if (temp > 8) {
		body.classList.add("chill");
	} else if (temp > -5) {
		body.classList.add("cold");
	} else {
		body.classList.add("freezing");
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

const currentLocationBtn = document.querySelector("button.current-location");
currentLocationBtn.addEventListener("click", () => {
	navigator.geolocation.getCurrentPosition(position => {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		renderLocationOnGoogleMap(lat, lon);
		renderSearchByCoordinates(lat, lon);
		console.log(lat, lon);
	});
});

function renderLocationOnGoogleMap(lat, lng) {
	const mapCanvas = document.querySelector("#map");
	const map = new google.maps.Map(mapCanvas, {
		center: { lat, lng },
		zoom: 11,
		styles: googleMapsStyle
	});
}
