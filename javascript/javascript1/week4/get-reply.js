let reply;
let command;
let name;
let debug = true;
let todoList = [];
const today = new Date();
let favDish;
let myCalendar = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let introductionPattern = "Hello my name is ";

function filterCommand(command, start, end) {
  return command.split(start).pop().split(end)[0];
}

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return weekNo;
}

function getReply(command) {
  if (debug) {
    console.log("- " + command);
  }
  // const lowerCaseCommand = command.toLowerCase();
  if (command.includes(introductionPattern)) {
    return getNameAndGreet(command);
  }

  if (command.includes("What is my name")) {
    return whatIsMyName(command);
  }

  if (command.includes("Add") && command.includes("to my todo")) {
    return addTodo(command);
  }

  if (command.includes("Remove") && command.includes("from my todo")) {
    return removeTodo(command);
  }

  if (command.includes("What is on my todo?")) {
    return listTodo();
  }

  if (command.includes("What day is it today?")) {
    return whatIsTheDate();
  }

  if (command.includes("What is") && (command.includes("+")
    || command.includes("-") || command.includes("*") || command.includes("/"))) {
    return calculate(command);
  }

  if (command.includes("My favorite dish is ")) {
    return addToFavDish(command);
  }

  if (command.includes("What is my favorite dish?")) {
    return whatIsMyFavDish();
  }

  if (command.includes("Set a timer for")) {
    return setTimer(command);
  }

  if (command.includes("Add") && command.includes("to my calendar")) {
    return addToCalendar(command);
  }

  if (command.includes("What am i doing this week?")) {
    return thisWeekInCalendar();
  }

}

function getNameAndGreet(command) {
  name = command.split(introductionPattern).pop();
  return `Nice to meet you ${name}.\n`;
}

function whatIsMyName(command) {
  if (name === undefined) {
    return "I don't know yet. Please tell me your name.";
  } else {
    return `Your name is ${name}.\n`;
  }
}

function addTodo(command) {
  todo = filterCommand(command, "Add ", " to my todo");
  todoList.push(todo);

  return `'${todo}' has been added to your todo.\n`;
}

function removeTodo(command) {
  todo = filterCommand(command, "Remove ", " from my todo");
  for( let i = 0; i < todoList.length; i++){
    if ( todoList[i] === todo) {
      todoList.splice(i, 1);
    }
  } return `'${todo}' has been removed from your todo.\n`;
}

function listTodo() {
  if (todoList.length === 0) {
    return "Your todo list is empty.\n";
  } else {
    return todoList;
  }
}

function whatIsTheDate() {
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  if (day === 1 ){
    return `Today is ${day}st of ${month} ${year}.\n`;
  } else if (day === 2) {
    return `Today is ${day}nd of ${month} ${year}.\n`;
  } else {
    return `Today is ${day}th of ${month} ${year}.\n`;
  }
}

function calculate(command) {
  patternStart = "What is ";
  mathInput = command.split(patternStart).pop();
  return `${eval(mathInput)}\n`;
}

function addToFavDish(command) {
  patternStart = "My favorite dish is ";

  favDish = command.split(patternStart).pop();

  return `'${favDish}' has been saved as your favorite dish.\n`;
}

function whatIsMyFavDish() {
  if (favDish === undefined) {
    return "I don't know yet. Please tell me your name.";
  } else {
    return `Your favorite dish is ${favDish}.\n`;
  }
}

function setTimer(command) {
  timerString = filterCommand(command, "Set a timer for ", " minutes");
  timer = Number(timerString) * 1000;

  setTimeout(function(){
    console.log("Timer done");
  }, timer);

  return `Timer is set. Timer will be done in ${timerString} seconds.\n`;
}

function addToCalendar(command) {
  const newEventArr = filterCommand(command, "Add ", " to my calendar").split(" the ");

  // 3/5-2019
  const dateArr = newEventArr[1].split(new RegExp("[/-]"));

  const newEventObj = {
    name: newEventArr[0],
    date: new Date(`${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`)
  };

  // console.log(newEventObj);
  console.log(months[newEventObj.date.getMonth()]);


  if (myCalendar.push(newEventObj)) {
    return `${newEventObj.name} added to your calendar.\n`;
  }
}

function thisWeekInCalendar() {
  const currentWeekNumber = getWeekNumber(new Date());
  const thisWeeksEvents = [];

  for (let i = 0; i < myCalendar.length; i++) {
    if (currentWeekNumber === getWeekNumber(myCalendar[i].date)) {
      const name  = myCalendar[i].name;
      const day   = myCalendar[i].date.getDate();
      const month = months[myCalendar[i].date.getMonth()];
      const year  = myCalendar[i].date.getFullYear();
      const eventRecord = `${name} ${day}. of ${month} ${year}`;

      thisWeeksEvents.push(eventRecord);
    }
  }
  // console.log(thisWeeksEvents);

  let _event = "event";
  if (thisWeeksEvents.length > 1) {
    _event = "events";
  }

  return `This week you have ${thisWeeksEvents.length} ${_event}:\n${thisWeeksEvents.join('\n')}`;
}

// console.log(getReply("Hello my name is Anna Maria."));
// console.log(getReply("What is my name?"));
// console.log(getReply("Add fishing to my todo."));
// console.log(getReply("Add singing in the shower to my todo."));
// console.log(getReply("Add painting to my todo."));
// console.log(getReply("Remove fishing from my todo."));
// console.log(getReply("Remove singing in the shower from my todo."));
// console.log(getReply("Remove painting from my todo."));
//// console.log(todoList);
// console.log(getReply("What is on my todo?"));
// console.log(getReply("What day is it today?"));
// console.log(getReply("What is 3 + 3"));
// console.log(getReply("My favorite dish is spaghetti"));
// console.log(getReply("What is my favorite dish?"));
// console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Add Bike ride the 3/5-2019 to my calendar"));
console.log(getReply("Add Swimming the 25/9-2019 to my calendar"));
console.log(getReply("Add Singing the 23/9-2019 to my calendar"));
console.log(getReply("What am i doing this week?"));
