const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

// for testing
// const travelInformation2 = {
//   speed: 25,
//   destinationDistance: 432,
// };

//  function calculateTravelTime(travelInformationObject) {
//   const kmH = travelInformationObject.speed;
//   const distance = travelInformationObject.destinationDistance;
//   const hours = Math.floor(distance/kmH%60);
//   const minutes = Math.round(distance%kmH*60/kmH);
//   return `${hours} hours and ${minutes} minutes`
// }


function calculateTravelTime(travelInformationObject) {
  const kmH = travelInformationObject.speed;
  const distance = travelInformationObject.destinationDistance;
  const division = distance/kmH;
  const hours = Math.floor(division);
  const minutes = Math.round(60*(division%1));
  return `${hours} hours and ${minutes} minutes`
}

// const division   = distance/kmH;
// const hours      = Math.floor(division);
// const minutes    = Math.round(60*(division%1));

const travelTime = calculateTravelTime(travelInformation);
// const travelTime2 = calculateTravelTime(travelInformation2);
console.log(travelTime); // 4 hours and 42 minutes
// console.log(travelTime2);
