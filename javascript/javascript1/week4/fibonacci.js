const fibonacciNumbers = [];

function fib(num){
  for (let i = 2 ; i < num; i++){
    fibonacciNumbers[0] = 0;
    fibonacciNumbers[1] = 1;    
    fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers[i-2];
  } return fibonacciNumbers[fibonacciNumbers.length-1];
}

console.log(fib(5));
console.log(fib(10));

// console.log(fibonacciNumbers);