const a = 'Fizz';
const b = 'Buzz';

// function fizzBuzz(){
  for (let i = 1; i <= 100; i++){
    if (i%3 == 0 && i%5 == 0){
      console.log(a+b);
    } else if (i%3 == 0){
      console.log(a);
    } else if (i%5 == 0){
      console.log(b);
    } else {
      console.log(i);
    }
  } 
// }


// console.log(fizzBuzz(4,12));
