let name = '';
const gizem = 'Hello my name is Gizem';

const todoList = [];
const addTodoInput1 = 'Add fishing to my todo';
const addTodoInput2 = 'Add singing in the shower to my todo';
const addTodoInput3 = 'Add painting to my todo';


function greetings(string) {
  lowerCase = string.toLowerCase();
  if (lowerCase.includes('hello my name is ')) {
    name = string.slice(17);
    console.log(`Nice to meet you ${name}`);
    return name;
  } else {
    console.log(`Sorry I couldn't hear right. Can you start with 'Hello my name is'?`);
  }
}

function whatIsName(string){
  lowerCase = string.toLowerCase();
  if (lowerCase === `what is my name?`){
    if (name !== undefined && name.length > 0) {
      console.log(name);
    } else {
      console.log(`Your name is still undefined.`);
    }
  }
}

function addTodo1(string) {
  const todo = [];

}

function addTodo(string) {
  const input = string.split(' ');
  const todo = [];
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 'add' || 'to' || 'my'|| 'todo' || 'list') {
        console.log(input[i]);
        todo.push(input[i]);
        console.log(todo);
      } // return todo;
    } 
    if (todoList.push(todo)) {
        console.log(`${todo} is added to your Todo List.`)
    } return todoList;
  }
  // console.log(input);
  // console.log(todo);
  
// function askTodo(string) {
//   lowerCase = string.toLowerCase();
//   if (lowerCase === 'what is on my todo?') {
//     return todoList;
//   } else {
//     return `Your todo list is empty.`;
//   }
// }

function askTodo(string) {
  if (todoList.length > 0) {
    return todoList;
    } else {
    return `Your todo list is empty.`;
  }
}

// greetings(gizem);
// whatIsName('What is my name?');
      
addTodo(addTodoInput1);
addTodo(addTodoInput2);
addTodo(addTodoInput3);

console.log(askTodo('What is on my todo?'));