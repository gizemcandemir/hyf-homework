const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// for (let i=0; i<names.length; i++) {
//   if (names[i] === nameToRemove) {
//     delete names[i];
//   }
// }

// Alternative suggested method
delete names[names.indexOf(nameToRemove)];

console.log(names); 
// [
//  'Peter',
//  <1 empty item>,
//  'Yana',
//  'kristina',
//  'Rasmus',
//  'Samuel',
//  'katrine',
//  'Tala'
// ]