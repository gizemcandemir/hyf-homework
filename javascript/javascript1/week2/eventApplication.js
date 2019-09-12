const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const today = new Date();
console.log("Today is " + weekDays[today.getDay()-1] + ".");

function getEventWeekday(num) {
  const eventDay = today.getDay() - 1 + num 
  if (eventDay >= 7) {
    console.log ("The event will be on a " + weekDays[(eventDay % 7)] + ".");
  } else {
    console.log ("The event will be on a " + weekDays[(eventDay)] + ".");
  }
}

return getEventWeekday(3);