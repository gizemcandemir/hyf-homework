const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const APP_ID = "appid=0e77f93fa96998c5a8997c761aaba15a";

const input = document.querySelector("input");
const button = document.querySelector("button");
const displayDiv = document.querySelector("body");

let searchQuery = "";
let sunrise = "";
let sunset = "";
const convertedTime = "";
let lat;
let lon;

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
	searchQuery =
		BASE_URL + "weather?q=" + input.value + "&" + APP_ID + "&units=metric";
	fetchJSON(searchQuery).then(data => {
		renderWeatherDetails(data);
	});
}

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

const renderWeatherDetails = data => {
	let temp = Math.round(data.main.temp);
	renderTempBasedUI(temp);

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
		zoom: 12,
		styles: [
			{
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#bdbdbd"
					}
				]
			},
			{
				featureType: "administrative.neighborhood",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff"
					}
				]
			},
			{
				featureType: "road",
				elementType: "labels",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{
						color: "#dadada"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "labels",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				featureType: "road.local",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#c9c9c9"
					}
				]
			},
			{
				featureType: "water",
				elementType: "labels.text",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			}
		]
	});
}
