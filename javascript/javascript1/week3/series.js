const seriesDurations = [
  {
    title: 'Game of Thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Orange Is The New Black',
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
// console.log(avgLifeSpanInMin);

let totalDays = 0;
let totalHours = 0;
let totalMinutesOfSeries = 0;
let grandTotalInMinutes = 0;
let totalTimeSpent = 0;

for (let i=0; i<seriesDurations.length; i++) { 
  totalMinutesPerSeries = seriesDurations[i].days*24*60 + seriesDurations[i].hours*60 + seriesDurations[i].minutes;
  grandTotalInMinutes += totalMinutesPerSeries;
  const percentageInLife = totalMinutesPerSeries*100/avgLifeSpanInMin;
  
  console.log(`${seriesDurations[i].title} took ${percentageInLife.toFixed(3)} of my life`);

  totalTimeSpent = grandTotalInMinutes*100/avgLifeSpanInMin;
}

console.log(`\nIn total that is ${totalTimeSpent.toFixed(2)}% of my life`);
