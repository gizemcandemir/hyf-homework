const logLocationBtn = document.querySelector('button.logLocationBtn');

if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
  console.log("geolocation IS NOT available");
}

logLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
    renderLocationOnGoogleMap(position.coords.latitude, position.coords.longitude);
  });
})

// // ------ Warmup 5 ------ //

// const button2 = document.createElement("button");
// button2.innerText = "Log location";
// button2.classList.add("log-location");
// document.body.appendChild(button2);
// const mapDiv = document.createElement("div");
// document.body.appendChild(mapDiv);

// function logLocation() {
// 	return () => {
// 		navigator.geolocation.getCurrentPosition(success, error, options);
// 	};
// }

// const options = {
// 	enableHighAccuracy: true,
// 	timeout: 5000,
// 	maximumAge: 0
// };

// function success(pos) {
// 	const crd = pos.coords;

// 	console.log(
// 		`Your current position is: \n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}\nMore or less ${crd.accuracy} meters.`
// 	);

// 	function printLocationInfo() {
// 		const div = document.createElement("div");
// 		div.classList.add("map");
// 		mapDiv.appendChild(div);
// 		const p = document.createElement("p");
// 		div.appendChild(p);
// 		p.innerText = `Your current position is: \n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}\nThat's more or less ${crd.accuracy} meters.`;
// 	}

// 	return printLocationInfo();
// }

// function error(err) {
// 	console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// button2.addEventListener("click", logLocation());

// // ------ Warmup 6 ------ //
// // will try later...