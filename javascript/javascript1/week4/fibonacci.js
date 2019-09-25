const fibonacciNumbers = [];

function fibonacci(num){
  for (let i = 2; i < num; i++){
    fibonacciNumbers[0] = 0;
    fibonacciNumbers[1] = 1;
    fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers[i-2];
    fibonacciNumbers.push(fibonacciNumbers[i]);
  } return fibonacciNumbers;
}

console.log(fibonacci(5));
// [ 0, 1, 1, 2, 3, 3 ] why does it repeat the last element??