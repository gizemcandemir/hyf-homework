function getFullName (firstName, surname, useFormalName) {
  if (useFormalName == undefined) {
    const fullname = firstName + " " + surname;  
    return (fullname);
  } else if (useFormalName == true) {
    const fullname = "Lord " + firstName + " " + surname;  
    return (fullname);
  } else {
    const fullname = firstName + " " + surname;
    return (fullname);
  }
}

const fullname1 = getFullName("Gizem", "Candemir", true);
const fullname2 = getFullName("Jane", "Smith", false);
const fullname3 = getFullName("Oya", "Kilicoglu");

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);