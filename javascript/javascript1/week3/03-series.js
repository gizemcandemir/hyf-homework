const favSeriesDurations = [
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

function percantageTimeSpentOnSeriesToLife (seriesDurations) {
  const avgLifeSpanInMin = 80 * 365 * 24 * 60; // 80 years in minutes
  let totalTimeSpentOnSeries = 0;
  
  seriesDurations.forEach(function(seriesDuration) {
    const totalMinutesPerSeries = seriesDuration.days * 24 * 60 + seriesDuration.hours * 60 + seriesDuration.minutes;
    
    totalTimeSpentOnSeries += totalMinutesPerSeries;
    
    const percTimeSpentOnSeriesToLife = totalTimeSpentOnSeries * 100 / avgLifeSpanInMin;
    console.log(`${seriesDuration.title} took ${percTimeSpentOnSeriesToLife.toFixed(3)} of my life`);
  });

  
  let percTotalTimeSpentOnSeriesToLife = totalTimeSpentOnSeries * 100 / avgLifeSpanInMin;
  
  return `\nIn total that is ${percTotalTimeSpentOnSeriesToLife.toFixed(2)}% of my life`;
}

console.log(percantageTimeSpentOnSeriesToLife (favSeriesDurations));