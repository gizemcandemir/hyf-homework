const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Orange is the new black',
    days: 3,
    hours: 19,
    minutes: 0,
  },
  {
    title: 'The Bridge',
    days: 0,
    hours: 19,
    minutes: 30,
  }
]

const avgLifeSpanInMin = 80*365*24*60;
console.log(avgLifeSpanInMin);

console.log(`${seriesDurations.title} took  of my life`);

let totalMinutesOfSeries = 0;
let totalDays = 0;
let totalHours = 0;

for (let i=0; i<seriesDurations.length; i++) { 
  // console.log(seriesDurations[i].days);
  totalDays = totalDays + seriesDurations[i].days;
  totalDaysInMinutes = totalDays*24*60;
  console.log(`total days: ${totalDaysInMinutes}`);

  totalHours = totalHours + seriesDurations[i].hours;
  totalHoursInMinutes = totalHours*60;
  console.log(`total hours: ${totalHoursInMinutes}`);

  totalMinutes = totalMinutesOfSeries + seriesDurations[i].hours; 
  console.log(`total minutes: ${totalMinutes}`);

  const grandTotalInMinutes = totalDaysInMinutes + totalHoursInMinutes + totalMinutes;
  console.log(`grand total in minutes is: ${grandTotalInMinutes}`);

  const timeSpent = grandTotalInMinutes*100/avgLifeSpanInMin;
  console.log(timeSpent);
}