function getFullName (firstName, surname, useFormalName) {
  if (useFormalName == undefined) {
    const fullName = firstName + " " + surname;  
    return (fullName);
  } else if (useFormalName == true) {
    const fullName = "Lord " + firstName + " " + surname;  
    return (fullName);
  } else {
    const fullName = firstName + " " + surname;
    return (fullName);
  }
}

const fullName1 = getFullName("Gizem", "Candemir", true);
const fullName2 = getFullName("Jane", "Smith", false);
const fullName3 = getFullName("Oya", "Kilicoglu");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);