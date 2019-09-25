const a = 'Fizz';
const b = 'Buzz';

function fizzBuzz(num1, num2){
  for (let i = 1; i <= 100; i++){
    if (i%num1 == 0 && i%num2 == 0){
      console.log(a+b);
    } else if (i%num1 == 0){
      console.log(a);
    } else if (i%num2 == 0){
      console.log(b);
    } else {
      console.log(i);
    }
  } 
}

console.log(fizzBuzz(4,12));
