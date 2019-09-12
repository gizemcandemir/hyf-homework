function whatToWear(degree) {
  const clothesToWear = ["Swimsuit", "T-shirt", "Sweater", "Jacket", "Snow-jacket"];
  const text = "It's " + degree + " degrees, you should wear: ";
  if (degree > 30 ) {
    return text + clothesToWear[0];
  } else if (degree > 23) {
    return text + clothesToWear[1];
  } else if (degree > 13) {
    return text + clothesToWear[2];
  } else if (degree > 0) {
    return text + clothesToWear[3];
  } else if (degree <= 0) {
    return text + clothesToWear[4];
  } else {
    return "in this case I don't know what to wear.";
  }
}

console.log(whatToWear(-5));
console.log(whatToWear(13));
console.log(whatToWear(21));
console.log(whatToWear(28));
console.log(whatToWear(33));