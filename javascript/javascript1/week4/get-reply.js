let reply;
let command;
let name;
let debug = true;
let todoList = [];

let introductionPattern = "Hello my name is ";

function getReply(command) {
  if (debug) {
    console.log("- " + command);
  }
  if (command.includes(introductionPattern)) {
    return getNameAndGreet(command);
  }

  if (command.includes('What is my name')) {
    return whatIsMyName(command);
  }

  if (command.includes('Add') && command.includes('to my todo')) {
    return addTodo(command);
  }

  if (command.includes('Remove') && command.includes('from my todo')) {
    return removeTodo(command);
  }
  
  if (command.includes('What is on my todo?')) {
    return listTodo(command);
  }
  
}

function getNameAndGreet(command) {
  name = command.split(introductionPattern).pop();
  return `Nice to meet you ${name}.\n`;
}

function whatIsMyName(command) {
  if (name === undefined) {
    return `I don't know yet. Please tell me your name.`;
  } else {
    return `Your name is ${name}.\n`;
  }
}

function addTodo(command) {
  patternStart = "Add ";
  patternEnd = " to my todo";

  todo = command.split(patternStart).pop().split(patternEnd)[0];
  todoList.push(todo);

  return `'${todo}' has been added to your todo.\n`;
}

function removeTodo(command) {
  patternStart = "Remove ";
  patternEnd = " from my todo";

  todo = command.split(patternStart).pop().split(patternEnd)[0];
  for( let i = 0; i < todoList.length; i++){ 
    if ( todoList[i] === todo) {
      todoList.splice(i, 1); 
    }
 } return `'${todo}' has been removed from your todo.\n`;
}

function listTodo(command) {
  if (todoList.length === 0) {
    return `Your todo list is empty.`
  } else {
    return `${todoList}`;
  }
}

// function whatIsTheDate() {}
//
// function addFavoriteDish() {}
//
// function listFavoriteDish() {}
//
// function setTimer() {}
//
// function addToCalendar() {}
//
// function listMyCalendar() {}

console.log(getReply(`Hello my name is Anna Maria`));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add painting to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('Remove singing in the shower from my todo'));
console.log(getReply('Remove painting from my todo'));
console.log(todoList);
console.log(getReply('What is on my todo?'));