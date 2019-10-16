const div = document.createElement("div");
document.body.appendChild(div);

// ------ Warmup 1 ------ //
function logAfter2andAHalfSec() {
	setTimeout(print, 1 * 1000); //gecici olarak 1 yaptim, sonra 2.5 yap.
}

const print = function print() {
	console.log("Called after 2.5 seconds");
};

logAfter2andAHalfSec();

/* function logWithDelaySimple(delay, stringToLog) {
	setTimeout(() => {console.log(stringToLog)}, delay * 1000);
}

const logIn5Sec = () => function logWithDelaySimple(delay, stringToLog) {
	setTimeout(() => {console.log(stringToLog)}, delay * 1000);
};

logWithDelaySimple(3, "This string is logged after 3 seconds");
// const  = logWithDelaySimple(5, "This string is logged after 5 seconds");

const button = document.createElement("button");
button.innerText = "log with delay button";
document.body.appendChild(button);

button.addEventListener("click", logIn5Sec); */

// ------ Warmup 2 ------ //
const stringToLog = `This string is logged after`;

function logWithDelay(delay, stringToLog) {
  return () => {
    setTimeout(() => {
      console.log(`${stringToLog} ${delay} seconds.`);
    }, delay * 1000);
  };
}

logWithDelay(3, stringToLog)();
const logIn5Sec = logWithDelay(5, stringToLog);

// ------ Warmup 3 ------ //
const button1 = document.createElement("button");
button1.innerText = "Log with delay";
document.body.appendChild(button1);
button1.classList.add("log-with-delay");

button1.addEventListener("click", logIn5Sec);

// ------ Warmup 4 ------ //
const earthLogger = () => {
	console.log("Earth");
}

const saturnLogger = () => {
	console.log("Saturn");
}

function planetLogFunction(el) {
	return el();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// ------ Warmup 5 ------ //
const button2 = document.createElement("button");
button2.innerText = "Log location";
document.body.appendChild(button2);
button2.classList.add("log-location");

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

  console.log(`Your current position is: \n Latitude : ${crd.latitude}\n Longitude: ${crd.longitude}\nMore or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

button2.addEventListener("click", logLocation());
